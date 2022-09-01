import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import clsx from "classnames"

type CodeEditorProps = {
  children?: React.ReactNode
  className?: string
}

// TODO copy
const CodeEditor = (props: CodeEditorProps) => {
  return <LiveEditor className={props.className}></LiveEditor>
}

type PlaygroundProps = {
  children: string
  scope?: { [x in string]: any }
  className?: string
}

const Playground = ({ children, scope, className }: PlaygroundProps) => {
  return (
    <LiveProvider code={children} scope={scope}>
      <div className={clsx("grid grid-cols-1 sm:grid-cols-2", className)}>
        <LiveError className="!m-0 sm:order-2" />
        <LivePreview className="!m-0 sm:order-2" />
        <CodeEditor className="sm:order-1" />
      </div>
    </LiveProvider>
  )
}

export default Playground
