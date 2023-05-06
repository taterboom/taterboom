import { useRef, useState } from "react"
import { motion } from "framer-motion"

function GlowBg() {
  const [debug, setDebug] = useState(false)
  return (
    <div
      className="relative p-px bg-black rounded-2xl overflow-hidden"
      onClick={() => setDebug((v) => !v)}
    >
      <div
        className="relative z-10 p-8 bg-black rounded-2xl"
        style={{ visibility: debug ? "hidden" : "initial" }}
      >
        {" "}
        content{" "}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%,hsla(0,0%,100%,.05) 0deg,hsla(0,0%,100%,.02) 179.41deg,hsla(0,0%,100%,.14) 227.28deg,hsla(0,0%,100%,.012) 271.36deg,hsla(0,0%,100%,.05) 1turn),#111",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%,hsla(0,0%,100%,.2) 0deg,rgba(72,72,72,.2) 179.41deg,#484848 227.28deg,rgba(72,72,72,.2) 271.36deg,hsla(0,0%,100%,.2) 1turn)",
        }}
      ></div>
    </div>
  )
}

function GlowButton() {
  const glowBgEl = useRef<HTMLDivElement>(null)
  const onMouseMove = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glowBgEl.current!.style.setProperty("--x", `${x}px`)
    glowBgEl.current!.style.setProperty("--y", `${y}px`)
  }
  return (
    <button
      className="group relative px-10 py-3 bg-black rounded-2xl overflow-hidden"
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(225.44deg,#fff,hsla(0,0%,100%,.2) 25%,hsla(0,0%,100%,.2) 75%,hsla(0,0%,100%,.5))",
          }}
        ></div>
        <div className="absolute inset-0 bg-white transition-opacity opacity-0 group-hover:opacity-10"></div>
        <div
          className="absolute inset-px rounded-2xl bg-black"
          style={{
            backgroundImage:
              "linear-gradient(238.51deg,hsla(0,0%,100%,0) 1.7%,hsla(0,0%,100%,.1) 43.93%,hsla(0,0%,100%,0) 109.83%)",
          }}
        ></div>
        <div
          ref={glowBgEl}
          className="absolute inset-px rounded-2xl opacity-0 group-hover:opacity-20"
          style={{
            background: "radial-gradient( circle at var(--x) var(--y), #666, #0000000f )",
            transition: "opacity 0.5s",
          }}
        ></div>
      </div>
      <div className="relative z-10"> Button </div>
    </button>
  )
}

export default function Glow() {
  return (
    <div className="space-y-1">
      <GlowBg />
      <GlowButton />
    </div>
  )
}
