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
      <Link href="/posts/border-radius-in-canvas" passHref>
        <Button>Border Radius in Canvas</Button>
      </Link>
    </>
  )
}

export default Index
