import {
  SandpackProvider,
  SandpackLayout,
  SandpackProviderProps,
  SandpackFileExplorer,
  SandpackCodeViewer,
  SandpackFileExplorerProp,
  SandpackLayoutProps,
  CodeViewerProps,
  CodeEditorProps,
  SandpackCodeEditor,
  PreviewProps,
  SandpackPreview,
  SandpackFile,
} from "@codesandbox/sandpack-react"
import { useTheme } from "next-themes"
import { PropsWithChildren } from "react"

export default function SandpackPlayground(
  props: PropsWithChildren<{
    SandpackProviderProps?: SandpackProviderProps & {
      appendFiles?: Record<string, string | SandpackFile>
    }
    SandpackLayoutProps?: SandpackLayoutProps
    SandpackFileExplorer?: boolean | SandpackFileExplorerProp
    SandpackCodeViewer?: boolean | CodeViewerProps
    SandpackCodeEditor?: boolean | CodeEditorProps
    SandpackPreview?: boolean | PreviewProps
  }>
) {
  const { resolvedTheme } = useTheme()

  const files = props.SandpackProviderProps?.files || {
    "App.tsx": {
      code: props.children as string,
      active: props.SandpackProviderProps?.appendFiles
        ? !Object.values(props.SandpackProviderProps.appendFiles).some(
            (item) => typeof item !== "string" && item.active
          )
        : true,
    },
    ...props.SandpackProviderProps?.appendFiles,
  }
  const formattedSandpackProviderProps: SandpackProviderProps = {
    template: "react-ts",
    theme: resolvedTheme === "light" ? "light" : "dark",
    ...props.SandpackProviderProps,
    files,
  }
  const hasMultipleFiles = Object.keys(files).length > 1
  const formattedSandpackLayoutProps = props.SandpackLayoutProps
  const formattedSandpackFileExplorerProps = props.SandpackFileExplorer && {
    ...(typeof props.SandpackFileExplorer === "object" ? props.SandpackFileExplorer : {}),
  }
  const formattedSandpackCodeViewerProps = props.SandpackCodeViewer && {
    showLineNumbers: true,
    showTabs: hasMultipleFiles,
    ...(typeof props.SandpackCodeViewer === "object" ? props.SandpackCodeViewer : {}),
  }
  const formattedSandpackCodeEditorProps = props.SandpackCodeEditor && {
    howLineNumbers: true,
    showTabs: hasMultipleFiles,
    ...(typeof props.SandpackCodeEditor === "object" ? props.SandpackCodeEditor : {}),
  }
  const formattedSandpackPreviewProps = props.SandpackPreview && {
    showRefreshButton: false,
    showOpenInCodeSandbox: false,
    ...(typeof props.SandpackPreview === "object" ? props.SandpackPreview : {}),
  }

  return (
    <SandpackProvider {...formattedSandpackProviderProps}>
      <SandpackLayout {...formattedSandpackLayoutProps}>
        {formattedSandpackFileExplorerProps ? (
          <SandpackFileExplorer {...formattedSandpackFileExplorerProps} />
        ) : null}
        {formattedSandpackCodeEditorProps ? (
          <SandpackCodeEditor {...formattedSandpackCodeEditorProps} />
        ) : null}
        {formattedSandpackCodeViewerProps ? (
          <SandpackCodeViewer {...formattedSandpackCodeViewerProps} />
        ) : null}
        {formattedSandpackPreviewProps ? (
          <SandpackPreview {...formattedSandpackPreviewProps} />
        ) : null}
      </SandpackLayout>
    </SandpackProvider>
  )
}
