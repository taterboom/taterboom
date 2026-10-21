export type Project = {
  title: string
  slug: string
  desc: string
  logo: string
  color: string
  cover?: string
  category: string
  status?: "in-progress"
}

const ASSETS_PATH = "/assets/projects"

export const PROJECTS: Project[] = [
  {
    title: "Sing Along Nihongo",
    category: "AI · Language learning",
    status: "in-progress",
    slug: "https://www.bilibili.com/video/BV1Sm411d7gu/?share_source=copy_web&vd_source=5cdbbc0bb09641dbaa07c04b115ecaf8",
    desc: "Learn Japanese through music, with AI-assisted lyrics and sing-along videos.",
    logo: ASSETS_PATH + "/sing-along-nihongo-logo.png",
    cover: ASSETS_PATH + "/sing-along-nihongo-cover.png",
    color: "#B850CC",
  },
  {
    title: "PromptSnippets",
    category: "Productivity tool",
    slug: "https://promptsnippets.taterboom.com",
    desc: "Turn reusable prompts into variable snippets. Less repetitive typing, more flow.",
    logo: ASSETS_PATH + "/prompt-snippets-logo-128.png",
    cover: ASSETS_PATH + "/prompt-snippets-cover.png",
    color: "#4752FD",
  },
  {
    title: "AwesomeExport",
    category: "Figma plugin",
    slug: "https://www.figma.com/community/plugin/1224919959068281380/awesomeexport",
    desc: "A more flexible image export workflow, right inside Figma.",
    logo: ASSETS_PATH + "/awesome-export-logo.png",
    cover: ASSETS_PATH + "/awesome-export-cover.png",
    color: "#FE6C31",
  },
  {
    title: "BabyRun",
    category: "Indie game",
    slug: "https://taterboom.itch.io/baby-run",
    desc: "A little girl, her first steps, and a playful adventure.",
    logo: ASSETS_PATH + "/babyrun-logo.png",
    cover: ASSETS_PATH + "/babyrun-cover.png",
    color: "#78DCA9",
  },
  {
    title: "tab-controller",
    category: "Chrome extension",
    slug: "https://chrome.google.com/webstore/detail/tab-controller/bnampjhjfnfghiclahecmdkbmiebhfbo",
    desc: "A Chrome extension for easy tab movement",
    logo: ASSETS_PATH + "/tab-controller-logo-128.png",
    cover: ASSETS_PATH + "/tab-controller-cover.png",
    color: "#FD4CC6",
  },
  {
    title: "CompositeX",
    category: "Browser automation",
    slug: "https://compositex.taterboom.com",
    desc: "Build automation workflows for the things you repeat in your browser.",
    logo: ASSETS_PATH + "/compositex-logo-128.png",
    cover: ASSETS_PATH + "/compositex-cover.png",
    color: "#131313",
  },
  {
    title: "ETSAP",
    category: "Web utility",
    slug: "https://etsap.vercel.app",
    desc: "A shared clipboard for moving text between your computer and phone.",
    logo: ASSETS_PATH + "/etsap-logo.png",
    color: "#89414F",
  },
]

