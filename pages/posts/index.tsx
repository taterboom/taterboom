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
  // {
  //   title: "How to get the information about an npm package",
  //   slug: "/posts/how-to-get-a-npm-package-information",
  // },
  {
    title: "SVG Filter Effects",
    slug: "/posts/svg-filter-effects",
  },
  {
    title: "SVG Filter Effects Examples",
    slug: "/posts/svg-filter-effects-examples",
  },
  {
    title: "Caddy 反向代理和自动HTTPS",
    slug: "/posts/caddy-reverse-proxy",
  },
  {
    title: "nodejs中如何通过代理发送请求",
    slug: "/posts/nodejs-fetch-through-proxy",
  },
  {
    title: "如何基于Docker部署Playwright项目",
    slug: "/posts/playwright-alpine",
  },
  {
    title: "浏览器插件侧面板（side panel）",
    slug: "/posts/chrome-exension-side-panel",
  },
]

const Index: CommonPage = () => {
  return (
    <ul className="flex flex-col gap-4">
      {POSTS.map((post) => (
        <li key={post.title}>
          <Link key={post.title} href={post.slug} passHref>
            <Button>{post.title}</Button>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Index
