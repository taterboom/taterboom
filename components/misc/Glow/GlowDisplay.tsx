import { GlowButton } from "./Glow"

export default function GlowDisplay() {
  return (
    <div className="relative p-px bg-black rounded-2xl overflow-hidden">
      <div className="relative z-10 p-16 bg-black rounded-2xl">
        <GlowButton />
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
