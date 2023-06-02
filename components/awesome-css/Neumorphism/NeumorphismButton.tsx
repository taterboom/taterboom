import styles from "./Neumorphism.module.css"
import { useMemo } from "react"
import color from "color"

export function NeumorphismButton({ colors }: { colors: [string, string] }) {
  const backgroundColor = colors[0]
  const foregroundColor = colors[1]
  const shadowColor = useMemo(() => {
    const baseColorObj = color(backgroundColor)
    const shadowColors = [baseColorObj.darken(0.1).hex(), baseColorObj.lighten(0.1).hex()]
    return shadowColors
  }, [backgroundColor])
  return (
    <button
      className={styles["neumorphism-button"]}
      style={
        {
          "--size": "8px",
          "--background-color": backgroundColor,
          "--foreground-color": foregroundColor,
          "--shadow-color-1": shadowColor[0],
          "--shadow-color-2": shadowColor[1],
        } as React.CSSProperties
      }
    >
      Neumorphism
    </button>
  )
}
