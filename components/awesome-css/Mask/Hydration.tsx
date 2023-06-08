import clsx from "classnames"
import styles from "./text-stroke.module.css"
import hydrationStyles from "./Hydration.module.css"
import { PropsWithChildren, useState } from "react"
import { useCallback } from "react"

function Content(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    wireframe?: boolean
  }
) {
  return (
    <div
      className={clsx(
        "text-4xl font-bold",
        props.wireframe && "text-transparent",
        props.wireframe && styles["text-stroke"],
        props.className
      )}
    >
      {props.children}
    </div>
  )
}

function Static() {
  return (
    <div className="relative">
      <Content className="text-[#e22]">Mask</Content>
      <div className="absolute left-0 top-0">
        <Content wireframe className={hydrationStyles["mask-image-linear"]}>
          Mask
        </Content>
      </div>
    </div>
  )
}

function Dynamic() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    console.log(e.nativeEvent)
    setX(e.nativeEvent.offsetX)
    setY(e.nativeEvent.offsetY)
  }, [])
  return (
    <div
      className="relative"
      style={
        {
          "--x": `${x}px`,
          "--y": `${y}px`,
        } as React.CSSProperties
      }
      onMouseMove={onMouseMove}
    >
      <Content className="flex justify-center items-center px-20 py-20 rounded-full">
        Mask <br /> Mouse Over
      </Content>
      <Content
        wireframe
        className={clsx(
          "absolute inset-0 flex justify-center items-center px-20 py-20 rounded-full",
          hydrationStyles["mask-image-radial-dynamic"]
        )}
      >
        Mask <br /> Mouse Over
      </Content>
    </div>
  )
}

export default function Hydration() {
  return (
    <div className="flex flex-col">
      {/* <Static /> */}
      <Dynamic />
    </div>
  )
}
