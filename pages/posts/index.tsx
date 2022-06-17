import { NextPage } from "next"
import Link from "next/link"
import Button from "../../components/Button"
import Page from "../../components/Page"

const Index: NextPage = () => {
  return (
    <Page>
      <Link href="/posts/from-vue-to-swiftui" passHref>
        <Button>From Vue to SwiftUI</Button>
      </Link>
    </Page>
  )
}

export default Index
