import Link from "next/link"
import { ProjectCard } from "@/components/ProjectCard"

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
  {
    title: "tab-controller",
    slug: "https://chrome.google.com/webstore/detail/tab-controller/bnampjhjfnfghiclahecmdkbmiebhfbo",
    desc: "A Chrome extension for easy tab movement",
    logo: ASSETS_PATH + "/tab-controller-logo-128.png",
    cover: ASSETS_PATH + "/tab-controller-cover.png",
    color: "#FD4CC6",
  },
]

const Projects = () => {
  return (
    <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 pb-16">
      {PROJECTS.map((item) => (
        <li key={item.title}>
          <Link href={item.slug} passHref>
            <ProjectCard project={item}></ProjectCard>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Projects
