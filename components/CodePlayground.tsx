import {
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"
import { useTheme } from "next-themes"
import { useMemo } from "react"

type CodePlaygroundContent =
  | {
      code: string
      ext?: string // default to js
    }
  | {
      files: Record<string, string>
    }

// 🚧🚧🚧
const CodePlayground = (props: { content: CodePlaygroundContent }) => {
  const { resolvedTheme } = useTheme()
  const files = useMemo(() => {
    if ("files" in props.content) {
      return props.content.files
    } else {
      const filePath = `index.${props.content.ext || "js"}`
      return {
        [filePath]: props.content.code,
      }
    }
  }, [props.content])
  console.log(files)
  return (
    <SandpackProvider
      theme={resolvedTheme === "light" ? "light" : "dark"}
      className="code-playground"
      style={
        {
          "--sp-layout-height": "auto",
        } as React.CSSProperties
      }
      files={files}
      options={
        {
          // activeFile: "index.json",
        }
      }
    >
      <SandpackLayout>
        <SandpackCodeViewer showTabs={true} />
        {/* <SandpackCodeEditor
        showTabs={false}
        showLineNumbers={false}
        showInlineErrors
        wrapContent
        closableTabs
      /> */}
        {/* <SandpackPreview /> */}
      </SandpackLayout>
    </SandpackProvider>
  )
}

// const CodePlayground: SandpackInternal = (props) => {
//   return (
//     <Sandpack
//       {...props}
//       options={{ readOnly: true, layout: "preview", ...props.options }}
//     ></Sandpack>
//   )
// }

export default CodePlayground
