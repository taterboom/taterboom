import { useEffect, useMemo, useRef, useState } from "react"
import clsx from "classnames"
import { useManualTimeout } from "./hooks/useManualTimeout"
import { ClaritySuccessLine, MaterialSymbolsContentCopy } from "./Icons"
import Link from "next/link"
import { omit } from "lodash"

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "type"
> & {
  type?: "text" | "rounded"
  href?: string
}

const Button = ({ type = "text", href, className, children, ...restProps }: ButtonProps) => {
  const btnClassName = useMemo(() => {
    let _className =
      "inline-block rounded mx-2 cursor-pointer outline-none focus:outline-0 hover:bg-button/30 active:bg-button"
    if (type === "text") {
      _className += " py-1 px-3"
    } else {
      _className += " p-2 rounded-full"
    }
    return clsx(_className, className)
  }, [type, className])
  if (href) {
    return (
      <Link href={href}>
        <a className={btnClassName}>{children}</a>
      </Link>
    )
  }
  return (
    <button className={btnClassName} {...restProps}>
      {children}
    </button>
  )
}

export const CopyButton = (props: ButtonProps & { text?: string }) => {
  const [showSuccess, setShowSuccess] = useState(false)

  const start = useManualTimeout(() => {
    setShowSuccess(false)
  }, 2000)

  return (
    <Button
      {...omit(props, "text")}
      className={clsx(props.className, " text-gray")}
      onClick={(e) => {
        console.log(props.text)
        if (!props.text) return
        navigator.clipboard.writeText(props.text)
        props.onClick?.(e)
        setShowSuccess(true)
        start()
      }}
    >
      {showSuccess ? <ClaritySuccessLine /> : <MaterialSymbolsContentCopy />}
    </Button>
  )
}

export default Button
