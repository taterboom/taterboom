import { forwardRef, useState } from "react"

export function roundRectByArc(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number = 0
) {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + width, y, x + width, y + height, radius)
  ctx.arcTo(x + width, y + height, x, y + height, radius)
  ctx.arcTo(x, y + height, x, y, radius)
  ctx.arcTo(x, y, x + width, y, radius)
  ctx.closePath()
}

export function roundRectByQuadraticCurve(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number = 0
) {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
}

const Tips = ({ cssColor, canvasColor, value, onChange }: any) => (
  <div className="flex absolute -bottom-1 right-12 gap-4">
    <button
      className="flex gap-2 items-center !outline-none"
      style={{ opacity: (value & 0b10) === 0b10 ? 1 : 0.5 }}
      onClick={() => onChange(value ^ 0b10)}
    >
      <div className=" w-8 h-5 rounded" style={{ background: cssColor }}></div>
      <div>CSS</div>
    </button>
    <button
      className="flex gap-2 items-center !outline-none"
      style={{ opacity: (value & 0b01) === 0b01 ? 1 : 0.5 }}
      onClick={() => onChange(value ^ 0b01)}
    >
      <div className=" w-8 h-5 rounded" style={{ background: canvasColor }}></div>
      <div>Canvas</div>
    </button>
  </div>
)

// eslint-disable-next-line react/display-name
export const CanvasExample = forwardRef<HTMLCanvasElement, any>(
  ({ rectSize, borderRidus, borderSize, color }, ref) => {
    const [visible, setVisible] = useState(0b11)
    return (
      <div
        className="mx-auto pb-8 box-content"
        style={{ position: "relative", zIndex: 1, width: rectSize, height: rectSize }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 0,
            width: rectSize,
            height: rectSize,
            borderRadius: borderRidus,
            border: `${borderSize}px solid rgba(0, 0, 0, 0.4)`,
            visibility: (visible & 0b10) === 0b10 ? "visible" : "hidden",
          }}
        ></div>
        <canvas
          ref={ref}
          width={rectSize}
          height={rectSize}
          style={{
            visibility: (visible & 0b01) === 0b01 ? "visible" : "hidden",
          }}
        ></canvas>
        <Tips
          value={visible}
          onChange={(v: any) => {
            setVisible(v)
          }}
          cssColor="rgba(0, 0, 0, 0.4)"
          canvasColor={color}
        />
      </div>
    )
  }
)
