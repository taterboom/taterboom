import Link from "next/link"
import { ProjectCard } from "@/components/ProjectCard"
import { PROJECTS } from "./data"

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
