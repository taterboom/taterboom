import { useTheme } from "next-themes"
import Button from "./Button"
import { MaterialSymbolsDarkMode, MaterialSymbolsLightMode } from "./Icons"

type ThemeSwitchProps = {}

function ThemeSwitch(props: ThemeSwitchProps) {
  const { resolvedTheme, theme, systemTheme, setTheme } = useTheme()
  console.log(resolvedTheme, theme, systemTheme)
  return (
    <Button
      type="rounded"
      onClick={() => {
        let nextTheme = resolvedTheme === "dark" ? "light" : "dark"
        if (nextTheme === systemTheme) {
          nextTheme = "system"
        }
        setTheme(nextTheme)
      }}
    >
      {resolvedTheme === "dark" ? (
        <MaterialSymbolsDarkMode></MaterialSymbolsDarkMode>
      ) : (
        <MaterialSymbolsLightMode></MaterialSymbolsLightMode>
      )}
    </Button>
  )
}

export default ThemeSwitch
