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
import Button, { CopyButton } from "./Button"
import { Language } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/palenight"

type CodeEditorProps = LiveEditorProps & {
  dsiableCopy?: boolean
  editorClassName?: string
}

export const CodeEditor = withLive<CodeEditorProps>((props) => {
  // @ts-ignore
  const code = props.code || props.live?.code

  return (
    <div className={clsx(props.className, "relative")}>
      {/* @ts-ignore */}
      <LiveEditor
        theme={theme}
        {...omit(props, "className", "live")}
        className={props.editorClassName}
      ></LiveEditor>
      <CopyButton className="absolute right-0 top-1" type="rounded" text={code}></CopyButton>
    </div>
  )
})

type PlaygroundProps = {
  children: string
  scope?: { [x in string]: any }
  className?: string
  language?: Language
}

const Playground = ({ children, scope, className, language }: PlaygroundProps) => {
  return (
    <LiveProvider theme={theme} code={children} scope={scope} language={language}>
      <div className={clsx("grid grid-cols-1 sm:grid-cols-2", className)}>
        <LiveError className="!m-0 sm:order-2" />
        <LivePreview className="!m-0 sm:order-2" />
        <CodeEditor className="sm:order-1" />
      </div>
    </LiveProvider>
  )
}

export default Playground
