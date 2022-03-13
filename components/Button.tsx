import { useMemo } from "react"

type ButtonProps = {
  type?: "text" | "rounded"
  href?: string
}

const Button: React.FC<ButtonProps> = ({ type = "text", href, children }) => {
  const className = useMemo(() => {
    const baseClassName =
      "inline-block rounded mx-2 py-1 cursor-pointer hover:bg-button/30 active:bg-button"
    if (type === "text") {
      return baseClassName + " px-3"
    } else {
      return baseClassName + " p-2 rounded-full"
    }
  }, [type])
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }
  return <div className={className}>{children}</div>
}

export default Button
