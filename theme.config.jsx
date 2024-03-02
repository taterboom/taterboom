import LogoWithTextAnchor from "./components/Logo/LogoWithTextAnchor"
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

module.exports = {
  // components: {
  //   code: (maybeContents) => {
  //     const contents = Array.isArray(maybeContents) ? maybeContents : [maybeContents]
  //     console.log(contents)
  //     return contents.map((item, index) => {
  //       if (!item.children) return null
  //       if (item["data-theme"] && item["data-language"]) {
  //         console.log(JSON.stringify(item, null, 2))
  //         return (
  //           <SandpackProvider
  //             key={index}
  //             files={{
  //               code: { code: item.children, active: true },
  //             }}
  //           >
  //             <SandpackLayout>
  //               <SandpackFileExplorer />
  //               <SandpackCodeViewer showLineNumbers showTabs />
  //             </SandpackLayout>
  //           </SandpackProvider>
  //         )
  //       }
  //     })
  //   },
  // },
  footer: (
    <footer style={{ marginTop: 48 }}>
      <LogoWithTextAnchor />
    </footer>
  ),
  head: ({ title, meta }) => (
    <>
      {title && <title>{title}</title>}
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  titleSuffix: null,
  postFooter: null,
  // cusdis: {
  //   appId: "your_app_id",
  //   host: "your_host(optional)",
  //   lang: "your_lang",
  // },
}
