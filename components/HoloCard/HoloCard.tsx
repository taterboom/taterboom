"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createCardRenderer, type CardAssets, type CardRenderer } from "./renderer"
import "./holo.css"

const ASSETS: CardAssets = {
  character: "/assets/holo/star/character.webp",
  girl: "/assets/holo/star/girl.webp",
  ui: "/assets/holo/star/ui.webp",
  structure: "/assets/holo/star/structure.webp",
  background: "/assets/holo/star/background.webp",
}
const BACK = "/assets/holo/star/back.webp"
const CARD_ASPECT = 3088 / 2316

const DRAG_HINT = "Drag to rotate · Tap to flip"
// Tilt reached when the cursor sits at the edge of the viewport. The shader places the specular
// highlight at p = (.5 + sin(yaw) * .65, .6 + sin(pitch) * .65), so these carry it to p.x .13-.87
// and p.y .30-.91 — far enough into every corner of the card.
const HOVER_YAW = 35
const HOVER_PITCH = 28
const clampTilt = (v: number) => Math.max(-28, Math.min(28, v))
const wrap = (v: number) => ((((v + 180) % 360) + 360) % 360) - 180

export default function HoloCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const frontRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  const [depth, setDepth] = useState(0)
  const [glow, setGlow] = useState(0.15)
  const [immersive, setImmersive] = useState(false)
  const [status, setStatus] = useState<string | null>("Loading card…")
  const [hint, setHint] = useState("")
  const [motionOn, setMotionOn] = useState(false)
  const [motionBusy, setMotionBusy] = useState(false)

  // The render loop reads these every frame, so they are mirrored into refs rather than
  // captured — the effect below must not re-run when a slider moves.
  const depthRef = useRef(depth)
  const glowRef = useRef(glow)
  const dirtyRef = useRef(true)

  // Imperative motion/pointer state shared between the effect and the control handlers.
  const apiRef = useRef<{
    startMotion: () => Promise<void>
    stopMotion: (message?: string) => void
    calibrate: () => void
  } | null>(null)

  useEffect(() => {
    depthRef.current = depth
    glowRef.current = glow
    dirtyRef.current = true
  }, [depth, glow, immersive])

  useEffect(() => {
    const canvas = canvasRef.current
    const card = cardRef.current
    const front = frontRef.current
    const back = backRef.current
    if (!canvas || !card || !front || !back) return

    let renderer: CardRenderer | null = null
    let raf = 0
    let cancelled = false
    const cleanups: (() => void)[] = []

    const m = {
      x: -5,
      y: -12,
      tx: -5,
      ty: -12,
      base: 0,
      down: false,
      px: 0,
      py: 0,
      moved: false,
      pointer: null as number | null,
      startX: 0,
      startY: 0,
    }
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches

    let motionEnabled = false
    let origin: { beta: number; gamma: number } | null = null
    let sensorX = 0
    let sensorY = 0
    let sensorTimer: ReturnType<typeof setTimeout> | undefined
    let orientationSeen = false

    function calibrate() {
      origin = null
      sensorX = sensorY = 0
      m.tx = 0
      m.ty = m.base
    }

    function stopMotion(message = "") {
      motionEnabled = false
      clearTimeout(sensorTimer)
      removeEventListener("deviceorientation", onOrientation)
      removeEventListener("devicemotion", onMotion)
      setMotionOn(false)
      setHint(message)
    }

    function onOrientation(e: { beta: number | null; gamma: number | null }) {
      if (!motionEnabled || document.hidden) return
      if (!Number.isFinite(e.beta) || !Number.isFinite(e.gamma)) return
      const beta = e.beta as number
      const gamma = e.gamma as number
      orientationSeen = true
      clearTimeout(sensorTimer)
      if (!origin) origin = { beta, gamma }
      const b = wrap(beta - origin.beta)
      const g = wrap(gamma - origin.gamma)
      const a = ((screen.orientation?.angle ?? 0) * Math.PI) / 180
      sensorX = clampTilt(-(b * Math.cos(a) + g * Math.sin(a)) * 0.85)
      sensorY = clampTilt((g * Math.cos(a) - b * Math.sin(a)) * 0.85)
      setHint("")
    }

    function onMotion(e: DeviceMotionEvent) {
      if (orientationSeen || !motionEnabled || document.hidden) return
      const g = e.accelerationIncludingGravity
      if (!g || ![g.x, g.y, g.z].every(v => Number.isFinite(v))) return
      const [gx, gy, gz] = [g.x as number, g.y as number, g.z as number]
      if (Math.hypot(gx, gy, gz) < 1) return
      // Gravity provides stable relative tilt when orientation events are unavailable.
      onOrientation({
        beta: (Math.atan2(-gy, Math.hypot(gx, gz)) * 180) / Math.PI,
        gamma: (Math.atan2(gx, -gz) * 180) / Math.PI,
      })
      orientationSeen = false
    }

    async function startMotion() {
      if (!isSecureContext) {
        setHint("Motion needs a secure (HTTPS) connection. Drag still works.")
        return
      }
      const orientationApi = globalThis.DeviceOrientationEvent as
        | (typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> })
        | undefined
      const motionApi = globalThis.DeviceMotionEvent as
        | (typeof DeviceMotionEvent & { requestPermission?: () => Promise<string> })
        | undefined
      if (!orientationApi && !motionApi) {
        setHint("Motion is unavailable on this device. Drag to rotate.")
        return
      }
      setMotionBusy(true)
      try {
        // Both requests must start synchronously inside the tap, before either is awaited.
        const requests = [orientationApi, motionApi]
          .filter(Boolean)
          .map(api =>
            typeof api!.requestPermission === "function"
              ? api!.requestPermission()
              : Promise.resolve("granted"),
          )
        const permissions = await Promise.allSettled(requests)
        if (!permissions.some(r => r.status === "fulfilled" && r.value === "granted")) {
          setHint(
            "Motion permission was not granted. Allow Motion & Orientation in your browser settings, then reload. Drag still works.",
          )
          return
        }
        orientationSeen = false
        calibrate()
        motionEnabled = true
        setMotionOn(true)
        setHint("")
        addEventListener("deviceorientation", onOrientation)
        addEventListener("devicemotion", onMotion)
        sensorTimer = setTimeout(
          () => stopMotion("No sensor data. Open this page directly in Safari or Chrome, allow Motion & Orientation, then retry."),
          5000,
        )
      } catch {
        stopMotion("Motion could not start. Check browser permissions, or drag.")
      } finally {
        setMotionBusy(false)
      }
    }

    apiRef.current = {
      startMotion,
      stopMotion: (message = "") => (motionEnabled ? stopMotion(message) : undefined),
      calibrate,
    }

    const flip = () => {
      m.base += 180
      m.tx = 0
      m.ty = m.base
    }

    const on = <K extends keyof HTMLElementEventMap>(
      el: HTMLElement | Window | Document | ScreenOrientation,
      type: K | string,
      handler: EventListenerOrEventListenerObject,
    ) => {
      el.addEventListener(type as string, handler)
      cleanups.push(() => el.removeEventListener(type as string, handler))
    }

    on(card, "keydown", (e: Event) => {
      const key = (e as KeyboardEvent).key
      if (key === " " || key === "Enter") {
        e.preventDefault()
        flip()
      }
      if (key.startsWith("Arrow")) {
        e.preventDefault()
        if (key === "ArrowLeft") m.ty -= 8
        if (key === "ArrowRight") m.ty += 8
        if (key === "ArrowUp") m.tx = Math.min(45, m.tx + 8)
        if (key === "ArrowDown") m.tx = Math.max(-45, m.tx - 8)
      }
    })

    on(card, "pointerdown", (e: Event) => {
      const p = e as PointerEvent
      if (m.pointer !== null || (p.pointerType === "mouse" && p.button !== 0)) return
      m.pointer = p.pointerId
      m.startX = p.clientX
      m.startY = p.clientY
      m.down = true
      m.px = p.clientX
      m.py = p.clientY
      m.moved = false
      card.setPointerCapture(p.pointerId)
    })

    on(card, "pointermove", (e: Event) => {
      const p = e as PointerEvent
      if (!m.down || m.pointer !== p.pointerId) return
      const dx = p.clientX - m.px
      const dy = p.clientY - m.py
      if (Math.hypot(p.clientX - m.startX, p.clientY - m.startY) > 5) m.moved = true
      m.ty += dx * 0.62
      m.tx = Math.max(-50, Math.min(50, m.tx - dy * 0.3))
      m.px = p.clientX
      m.py = p.clientY
    })

    // Hover tilt tracks the cursor across the whole page. Binding it to the card instead would
    // cap the usable travel at the card's own width, leaving the specular sweep near p.x 0.5;
    // HOVER_YAW/PITCH are sized so the corners of the card are reachable.
    on(window, "pointermove", (e: Event) => {
      const p = e as PointerEvent
      if (m.down || motionEnabled || p.pointerType !== "mouse") return
      const nx = Math.max(-1, Math.min(1, (p.clientX - innerWidth / 2) / (innerWidth / 2)))
      const ny = Math.max(-1, Math.min(1, (p.clientY - innerHeight / 2) / (innerHeight / 2)))
      m.tx = -ny * HOVER_PITCH
      m.ty = m.base + nx * HOVER_YAW
    })

    on(card, "pointerup", (e: Event) => {
      const p = e as PointerEvent
      if (m.pointer !== p.pointerId) return
      m.pointer = null
      m.down = false
      if (card.hasPointerCapture(p.pointerId)) card.releasePointerCapture(p.pointerId)
      if (!m.moved) flip()
      else m.base = Math.round(m.ty / 180) * 180
    })

    const cancelDrag = () => {
      m.pointer = null
      m.down = false
      m.base = Math.round(m.ty / 180) * 180
    }
    on(card, "pointercancel", cancelDrag)
    on(card, "lostpointercapture", () => {
      if (m.down) cancelDrag()
    })
    // Now that hover is page-wide, the card only returns to rest when the cursor leaves the page.
    on(document.documentElement, "pointerleave", () => {
      if (!m.down && !motionEnabled) {
        m.tx = 0
        m.ty = m.base
      }
    })

    on(window, "orientationchange", calibrate)
    on(document, "visibilitychange", () => {
      if (!document.hidden) calibrate()
    })
    if (screen.orientation) on(screen.orientation, "change", calibrate)

    let lastX = 999
    let lastY = 999

    function frame() {
      if (motionEnabled && !m.down) {
        m.tx = sensorX
        m.ty = m.base + sensorY
      }
      const ease = motionEnabled ? 0.115 : reduced ? 1 : 0.115
      m.x += (m.tx - m.x) * ease
      m.y += (m.ty - m.y) * ease
      card!.style.transform = `rotateX(${m.x}deg) rotateY(${m.y}deg)`
      const visible = Math.cos((m.y * Math.PI) / 180) * Math.cos((m.x * Math.PI) / 180) > 0.001
      front!.style.visibility = visible ? "visible" : "hidden"
      back!.style.visibility = visible ? "hidden" : "visible"
      if (
        renderer &&
        !document.hidden &&
        visible &&
        (dirtyRef.current || Math.abs(m.x - lastX) > 0.015 || Math.abs(m.y - lastY) > 0.015)
      ) {
        renderer.draw(m.x, m.y, 1, depthRef.current, glowRef.current)
        dirtyRef.current = false
        lastX = m.x
        lastY = m.y
      }
      raf = requestAnimationFrame(frame)
    }

    createCardRenderer(canvas, ASSETS)
      .then(created => {
        if (cancelled) {
          created.dispose()
          return
        }
        renderer = created
        setStatus(null)
        dirtyRef.current = true
        raf = requestAnimationFrame(frame)
      })
      .catch(() => {
        if (!cancelled) setStatus("Unable to load the card. Try reloading the page.")
      })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      stopMotion()
      cleanups.forEach(fn => fn())
      apiRef.current = null
      renderer?.dispose()
    }
  }, [])

  const onMotionClick = useCallback(() => {
    if (motionOn) apiRef.current?.stopMotion(DRAG_HINT)
    else void apiRef.current?.startMotion()
  }, [motionOn])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setImmersive(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const fmt = (v: number, signed: boolean) => `${signed && v > 0 ? "+" : ""}${v.toFixed(2)}×`

  return (
    <main
      className={`holo-room${immersive ? " is-immersive" : ""}`}
      style={{ "--card-aspect": CARD_ASPECT } as React.CSSProperties}
    >
      <button
        className="holo-immersive-toggle"
        type="button"
        onClick={() => setImmersive(v => !v)}
        aria-label={immersive ? "Exit immersive mode" : "Enter immersive mode"}
        aria-pressed={immersive}
        title={immersive ? "Exit immersive mode" : "Immersive mode"}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
          <path className="holo-eye-slash" d="m4 4 16 16" />
        </svg>
      </button>

      <div className="holo-stage">
        <div
          className="holo-card"
          ref={cardRef}
          tabIndex={0}
          role="button"
          aria-label="Click to flip, drag to rotate, or use arrow keys"
        >
          <div className="holo-face holo-front" ref={frontRef}>
            <canvas ref={canvasRef} />
          </div>
          <div className="holo-face holo-back" ref={backRef}>
            {/* eslint-disable-next-line @next/next/no-img-element -- raw asset, no optimiser resize wanted */}
            <img src={BACK} alt="Card back" draggable={false} />
          </div>
        </div>
      </div>

      <aside className="holo-controls" aria-label="Card effects">
        <label htmlFor="holo-depth">Depth</label>
        <div className="holo-depth-track">
          <input
            id="holo-depth"
            type="range"
            min={-3}
            max={3}
            step={0.05}
            value={depth}
            onChange={e => setDepth(Number(e.target.value))}
          />
          <span className="holo-depth-ticks" aria-hidden="true">
            <span />
            <span>0</span>
            <span />
          </span>
        </div>
        <output htmlFor="holo-depth">{fmt(depth, true)}</output>

        <label htmlFor="holo-glow">Contour glow</label>
        <input
          id="holo-glow"
          type="range"
          min={0}
          max={3}
          step={0.05}
          value={glow}
          onChange={e => setGlow(Number(e.target.value))}
        />
        <output htmlFor="holo-glow">{fmt(glow, false)}</output>

        <div className="holo-interaction">
          <button type="button" onClick={onMotionClick} aria-pressed={motionOn} disabled={motionBusy}>
            {motionOn ? "Disable motion" : "Enable motion"}
          </button>
          <button type="button" onClick={() => apiRef.current?.calibrate()}>
            Recenter
          </button>
        </div>
        <p className="holo-hint" aria-live="polite">
          {hint}
        </p>
      </aside>

      {status && (
        <p className="holo-status" role="status">
          {status}
        </p>
      )}
    </main>
  )
}
