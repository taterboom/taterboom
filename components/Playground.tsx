import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import clsx from "classnames"

type PlaygroundProps = {
  children: string
  scope?: { [x in string]: any }
  className?: string
}

const Playground = ({ children, scope, className }: PlaygroundProps) => {
  return (
    <LiveProvider code={children} scope={scope}>
      <div className={clsx("grid grid-cols-2", className)}>
        <LiveEditor className="" />
        <LiveError className="!m-0" />
        <LivePreview />
      </div>
    </LiveProvider>
  )
}

export default Playground
