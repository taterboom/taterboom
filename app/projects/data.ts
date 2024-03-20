export type Project = {
  title: string
  slug: string
  desc: string
  logo: string
  color: string
  cover?: string
  archived?: boolean
}

const ASSETS_PATH = "/assets/projects"

export const PROJECTS: Project[] = [
  {
    title: "🚧[Developing] Sing Along Nihongo",
    slug: "https://www.bilibili.com/video/BV1Sm411d7gu/?share_source=copy_web&vd_source=5cdbbc0bb09641dbaa07c04b115ecaf8",
    desc: "Use ChatGPT to read nihongo song lyrics, and you can sing along with it. Powered by ChatGPT and Remotion.",
    logo: ASSETS_PATH + "/sing-along-nihongo-logo.png",
    cover: ASSETS_PATH + "/sing-along-nihongo-cover.png",
    color: "#B850CC",
  },
  {
    title: "PromptSnippets",
    slug: "https://promptsnippets.taterboom.com",
    desc: "Boost your typing with variable snippets.",
    logo: ASSETS_PATH + "/prompt-snippets-logo-128.png",
    cover: ASSETS_PATH + "/prompt-snippets-cover.png",
    color: "#4752FD",
  },
  {
    title: "AwesomeExport",
    slug: "https://www.figma.com/community/plugin/1224919959068281380/awesomeexport",
    desc: "A Figma plugin for enhancing the image exporting.",
    logo: ASSETS_PATH + "/awesome-export-logo.png",
    cover: ASSETS_PATH + "/awesome-export-cover.png",
    color: "#FE6C31",
  },
  {
    title: "BabyRun",
    slug: "https://taterboom.itch.io/baby-run",
    desc: "A baby girl learns to run.",
    logo: ASSETS_PATH + "/babyrun-logo.png",
    cover: ASSETS_PATH + "/babyrun-cover.png",
    color: "#78DCA9",
  },
  {
    title: "tab-controller",
    slug: "https://chrome.google.com/webstore/detail/tab-controller/bnampjhjfnfghiclahecmdkbmiebhfbo",
    desc: "A Chrome extension for easy tab movement",
    logo: ASSETS_PATH + "/tab-controller-logo-128.png",
    cover: ASSETS_PATH + "/tab-controller-cover.png",
    color: "#FD4CC6",
  },
  {
    title: "CompositeX",
    slug: "https://compositex.taterboom.com",
    desc: "A Chrome extension lets you easily build automation workflows",
    logo: ASSETS_PATH + "/compositex-logo-128.png",
    cover: ASSETS_PATH + "/compositex-cover.png",
    color: "#131313",
  },
  {
    title: "ETSAP",
    slug: "https://etsap.vercel.app",
    desc: "Everyone can copy and paste here. Transfer text easily between PC and Mobile.",
    logo: ASSETS_PATH + "/etsap-logo.png",
    color: "#89414F",
  },
  {
    archived: true,
    title: "PDJ",
    slug: "https://chrome.google.com/webstore/detail/pdj/edgpjjbejcjkgnlnehoballnhokglenj",
    desc: "A Chrome extension for package.json preview",
    logo: ASSETS_PATH + "/pdj-logo-128.png",
    cover: ASSETS_PATH + "/pdj-cover.png",
    color: "#CD0064",
  },
  {
    title: "RR-Crop",
    slug: "https://rrcrop.taterboom.com",
    desc: "Crop pictures into rounded rectangles",
    logo: ASSETS_PATH + "/rrcrop-logo.png",
    cover: ASSETS_PATH + "/rrcrop-cover.png",
    color: "#EA6827",
  },
]
