"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import clsx from "classnames"
import { useManualTimeout } from "./hooks/useManualTimeout"
import { ClaritySuccessLine, MaterialSymbolsContentCopy } from "./Icons"
import Link from "next/link"

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "type"
> & {
  type?: "text" | "rounded"
}

const Button = ({ type = "text", className, children, ...restProps }: ButtonProps) => {
  const btnClassName = useMemo(() => {
    let _className =
      "inline-block rounded mx-2 cursor-pointer outline-none focus:outline-0 hover:bg-button/30 active:bg-button/60"
    if (type === "text") {
      _className += " py-1 px-3"
    } else {
      _className += " p-2 rounded-full"
    }
    return clsx(_className, className)
  }, [type, className])
  return (
    <button className={btnClassName} {...restProps}>
      {children}
    </button>
  )
}

export const CopyButton = ({
  text,
  className,
  onClick,
  ...restProps
}: ButtonProps & { text?: string }) => {
  const [showSuccess, setShowSuccess] = useState(false)

  const start = useManualTimeout(() => {
    setShowSuccess(false)
  }, 2000)

  return (
    <Button
      {...restProps}
      className={clsx(className, " text-gray")}
      onClick={(e) => {
        if (!text) return
        navigator.clipboard.writeText(text)
        onClick?.(e)
        setShowSuccess(true)
        start()
      }}
    >
      {showSuccess ? <ClaritySuccessLine /> : <MaterialSymbolsContentCopy />}
    </Button>
  )
}

export default Button
