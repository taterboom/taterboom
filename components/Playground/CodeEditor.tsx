import { LiveEditor, LiveEditorProps, withLive } from "react-live"
import clsx from "classnames"
import { omit } from "lodash"
import { CopyButton } from "../Button"
import theme from "prism-react-renderer/themes/palenight"

type CodeEditorProps = LiveEditorProps & {
  dsiableCopy?: boolean
  editorClassName?: string
}

export const CodeEditor = withLive<CodeEditorProps>((props) => {
  // @ts-ignore
  const code = props.code || props.live?.code

  return (
    <div className={clsx(props.className, "group relative")}>
      {/* @ts-ignore */}
      <LiveEditor
        theme={theme}
        {...omit(props, "className", "live")}
        className={props.editorClassName}
      ></LiveEditor>
      <CopyButton
        className="absolute right-0 top-1 opacity-0 transition-opacity group-hover:opacity-100"
        type="rounded"
        text={code}
      ></CopyButton>
    </div>
  )
})

export default CodeEditor
