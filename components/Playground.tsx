import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  LiveEditorProps,
  withLive,
} from "react-live"
import clsx from "classnames"
import { omit } from "lodash"
import { MaterialSymbolsContentCopy } from "./Icons"
import Button, { CopyButton } from "./Button"

type CodeEditorProps = LiveEditorProps & {
  dsiableCopy?: boolean
  editorClassName?: string
}

export const CodeEditor = withLive<CodeEditorProps>((props) => {
  // @ts-ignore
  const code = props.live.code
  return (
    <div className={clsx(props.className, "relative")}>
      {/* @ts-ignore */}
      <LiveEditor
        {...omit(props, "className", "live")}
        className={props.editorClassName}
      ></LiveEditor>
      <CopyButton className="absolute right-2 top-1" text={code}></CopyButton>
    </div>
  )
})

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
