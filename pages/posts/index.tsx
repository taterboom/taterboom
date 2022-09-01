import { NextPage } from "next"
import Link from "next/link"
import Button from "../../components/Button"
import type { CommonPage } from "../_app"

const Index: CommonPage = () => {
  return (
    <>
      <Link href="/posts/from-vue-to-swiftui" passHref>
        <Button>From Vue to SwiftUI</Button>
      </Link>
    </>
  )
}

export default Index
