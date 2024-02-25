import Link from "next/link"
import Button from "../../components/Button"
import type { CommonPage } from "../_app"

export type Project = {
  title: string
  slug: string
  desc?: string
  logo?: string
  cover?: string
  archived?: boolean
}

const ASSETS_PATH = "/assets/projects"

export const PROJECTS: Project[] = [
  // {
  //   title: "ChatSwaggerType",
  //   slug: "https://chrome.google.com/webstore/detail/chatswaggertype/lkminimpgnlpggmkanlhiahjafjnllfk",
  // },
  // {
  //   title: "DaiDai",
  //   slug: "https://chrome.google.com/webstore/detail/daidai/khcaoeekfbjiiipcjpegbniimnmomafo",
  // },
  // {
  //   title: "Rect Stroke",
  //   slug: "/projects/rect-stroke",
  // },
  // {
  //   title: "Props Break",
  //   slug: "/projects/props-break",
  // },
  {
    title: "PromptSnippets",
    slug: "https://promptsnippets.taterboom.com",
    desc: "A Chrome extension to Speed up the input with variable snippets",
    logo: ASSETS_PATH + "/prompt-snippets-logo-128.png",
    cover: ASSETS_PATH + "/prompt-snippets-cover.png",
  },
  {
    title: "AwesomeExport",
    slug: "https://www.figma.com/community/plugin/1224919959068281380/awesomeexport",
    desc: "A Figma plugin for enhancing the image exporting.",
    logo: ASSETS_PATH + "/awesome-export-logo.png",
    cover: ASSETS_PATH + "/awesome-export-cover.png",
  },

  {
    title: "CompositeX",
    slug: "https://compositex.taterboom.com",
    desc: "A Chrome extension lets you easily build automation workflows",
    logo: ASSETS_PATH + "/compositex-logo-128.png",
    cover: ASSETS_PATH + "/compositex-cover.png",
  },
  {
    title: "ETSAP",
    slug: "https://etsap.vercel.app",
    desc: "Everyone can copy and paste here. Transfer text easily between PC and Mobile.",
    logo: ASSETS_PATH + "/etsap-logo.png",
  },
  {
    archived: true,
    title: "PDJ",
    slug: "https://chrome.google.com/webstore/detail/pdj/edgpjjbejcjkgnlnehoballnhokglenj",
    desc: "A Chrome extension for package.json preview",
    logo: ASSETS_PATH + "/pdj-logo-128.png",
    cover: ASSETS_PATH + "/pdj-cover.png",
  },
  {
    title: "RR-Crop",
    slug: "https://rrcrop.taterboom.com",
    desc: "Crop pictures into rounded rectangles",
    logo: ASSETS_PATH + "/rrcrop-logo.png",
    cover: ASSETS_PATH + "/rrcrop-cover.png",
  },
  {
    title: "tab-controller",
    slug: "https://chrome.google.com/webstore/detail/tab-controller/bnampjhjfnfghiclahecmdkbmiebhfbo",
    desc: "A Chrome extension for easy tab movement",
    logo: ASSETS_PATH + "/tab-controller-logo-128.png",
    cover: ASSETS_PATH + "/tab-controller-cover.png",
  },
]

const Index: CommonPage = () => {
  return (
    <ul className="flex flex-col gap-4">
      {PROJECTS.map((item) => (
        <li key={item.title}>
          <Link href={item.slug} passHref>
            <Button>{item.title}</Button>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Index
