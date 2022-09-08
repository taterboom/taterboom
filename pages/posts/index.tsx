import { NextPage } from "next"
import Link from "next/link"
import Button from "../../components/Button"
import type { CommonPage } from "../_app"

const POSTS = [
  {
    title: "From Vue to SwiftUI",
    slug: "/posts/from-vue-to-swiftui",
  },
  {
    title: "Rounded Rectangle in Canvas",
    slug: "/posts/rounded-rectangle-in-canvas",
  },
  {
    title: "SVG Filter Effects",
    slug: "/posts/svg-filter-effects",
  },
  {
    title: "SVG Filter Effects Examples",
    slug: "/posts/svg-filter-effects-examples",
  },
]

const Index: CommonPage = () => {
  return (
    <>
      {POSTS.map((post) => (
        <Link key={post.title} href={post.slug} passHref>
          <Button>{post.title}</Button>
        </Link>
      ))}
    </>
  )
}

export default Index
