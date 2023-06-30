import "../styles/globals.css"
import "../styles/nextra.reset.css"
import "../styles/sandpack.css"
import type { AppProps } from "next/app"
import Page from "../components/Page"
import { NextPage } from "next"
import BlogPage from "../components/BlogPage"
import { ThemeProvider } from "next-themes"

export type CommonPage<P = {}, IP = P> = NextPage<P, IP> & {
  custom?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: CommonPage
}

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  return (
    // https://github.com/shuding/nextra/blob/core/packages/nextra-theme-blog/src/index.tsx#L45
    // use next-themes to sync theme with nextra.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {(() => {
        if (Component.custom) {
          return <Component {...pageProps} />
        }
        if (router.pathname.startsWith("/posts/")) {
          return (
            <BlogPage>
              <Component {...pageProps} />
            </BlogPage>
          )
        }
        return (
          <Page logo nav fixedNav>
            <Component {...pageProps} />
          </Page>
        )
      })()}
    </ThemeProvider>
  )
}

export default MyApp
