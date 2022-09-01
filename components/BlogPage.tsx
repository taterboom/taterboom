import Page from "./Page"
import "nextra-theme-blog/style.css"

const BlogPage = ({ children }: { children?: React.ReactNode }) => {
  return <Page>{children}</Page>
}

export default BlogPage
