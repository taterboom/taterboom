import SandpackPlayground from "@/components/SandpackPlayground"
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

export default function App() {
  return (
    <div>
      <h1>Test Sandpack</h1>
      <SandpackPlayground
        SandpackCodeViewer
        SandpackPreview
      >{`export default () => <div>SandpackPlayground test</div>`}</SandpackPlayground>
      <Sandpack></Sandpack>
      <SandpackProvider template="react">
        <SandpackLayout>
          <SandpackPreview
            // showNavigator
            showOpenInCodeSandbox={false}
            // showOpenNewtab
            // showRefreshButton
            // showRestartButton
          />
        </SandpackLayout>
      </SandpackProvider>
      <SandpackProvider template="react" options={{}}>
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor
          // showLineNumbers
          // showReadOnly
          // showRunButton
          // showInlineErrors
          // showTabs
          />
        </SandpackLayout>
      </SandpackProvider>
      <SandpackProvider
        files={{
          "test.py": {
            code: `import os
def main():
    print(os.listdir())

main()
`,
            active: true,
          },
        }}
      >
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeViewer showLineNumbers showTabs />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
