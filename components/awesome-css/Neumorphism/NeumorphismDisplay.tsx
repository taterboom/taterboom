import { useTheme } from "next-themes"
import { NeumorphismButton } from "./NeumorphismButton"
import { useMemo } from "react"

export default function NeumorphismDisplay() {
  const { resolvedTheme } = useTheme()
  const colors = useMemo(() => {
    const backgroundColor = resolvedTheme === "light" ? "#e8e8e8" : "#232323"
    const foregroundColor = resolvedTheme === "light" ? "#232323" : "#e8e8e8"
    return [backgroundColor, foregroundColor] as [string, string]
  }, [resolvedTheme])
  const bg = useMemo(() => {
    const backgroundColor = resolvedTheme === "light" ? `bg-[#e8e8e8]` : `bg-[#232323]`
    return backgroundColor
  }, [resolvedTheme])
  return (
    <div className={`${bg} p-16 rounded-2xl overflow-hidden flex justify-center items-center`}>
      <NeumorphismButton colors={colors} />
    </div>
  )
}
