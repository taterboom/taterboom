import { LiveProvider, LiveError, LivePreview } from "react-live"
import clsx from "classnames"
import { Language } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/palenight"
import { DEFAULT_SCOPES } from "./scopes"
import { CodeEditor } from "./CodeEditor"

type PlaygroundProps = {
  children: string
  scope?: { [x in string]: any }
  className?: string
  language?: Language
}

const Playground = ({ children, scope, className, language }: PlaygroundProps) => {
  return (
    <LiveProvider
      theme={theme}
      code={children}
      scope={{ ...DEFAULT_SCOPES, ...scope }}
      language={language}
    >
      <div className={clsx("grid grid-cols-1 sm:grid-cols-2", className)}>
        <LiveError className="!m-0 sm:order-2" />
        <LivePreview className="!m-0 sm:order-2" />
        <CodeEditor className="sm:order-1" />
      </div>
    </LiveProvider>
  )
}

export default Playground
