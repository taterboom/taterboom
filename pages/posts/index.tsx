import { NextPage } from "next"
import Link from "next/link"
import Button from "../../components/Button"
import type { CommonPage } from "../_app"

export type Post = {
  title: string
  slug: string
  time: string
}

export const POSTS: Post[] = [
  {
    title: "From Vue to SwiftUI",
    slug: "/posts/from-vue-to-swiftui",
    time: "2022-10-10",
  },
  {
    title: "Rounded Rectangle in Canvas",
    slug: "/posts/rounded-rectangle-in-canvas",
    time: "2022-11-02",
  },
  // {
  //   title: "How to get the information about an npm package",
  //   slug: "/posts/how-to-get-a-npm-package-information",
  // },
  {
    title: "SVG Filter Effects",
    slug: "/posts/svg-filter-effects",
    time: "2022-12-06",
  },
  {
    title: "SVG Filter Effects Examples",
    slug: "/posts/svg-filter-effects-examples",
    time: "2022-12-28",
  },
  {
    title: "Caddy 反向代理和自动HTTPS",
    slug: "/posts/caddy-reverse-proxy",
    time: "2023-01-30",
  },
  {
    title: "nodejs中如何通过代理发送请求",
    slug: "/posts/nodejs-fetch-through-proxy",
    time: "2023-02-27",
  },
  {
    title: "如何基于Docker部署Playwright项目",
    slug: "/posts/playwright-alpine",
    time: "2023-03-19",
  },
  {
    title: "浏览器插件侧面板（side panel）",
    slug: "/posts/chrome-exension-side-panel",
    time: "2023-06-23",
  },
  {
    title: "Next.js13 + NextAuth Starter 1",
    slug: "https://taterboom.notion.site/Next-js13-NextAuth-Starter-d0e5c683a58e4c79b4762e805fdb64a9",
    time: "2023-07-30",
  },
  {
    title: "Next.js13 + NextAuth Starter 2",
    slug: "https://taterboom.notion.site/Next-js13-NextAuth-Starter-Part2-42e753ce6a844070bdea302a306d3ec4",
    time: "2023-08-14",
  },
  {
    title: "点积和叉积在开发中的实用技巧",
    slug: "/posts/dot-and-cross-product",
    time: "2023-10-29",
  },
  {
    title: "Phpmyadmin: connection refused",
    slug: "https://taterboom.notion.site/Phpmyadmin-6bf4b76b6381413bbb35be4bd41c0bbb",
    time: "2023-12-03",
  },
  {
    title: "如何修改富文本编辑器的文本内容",
    slug: "/posts/change-text-in-contenteditable-zh",
    time: "2024-01-08",
  },
  {
    title: "Modify Text Content in Rich Text Editors",
    slug: "/posts/change-text-in-contenteditable",
    time: "2024-01-08",
  },
].reverse()

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
