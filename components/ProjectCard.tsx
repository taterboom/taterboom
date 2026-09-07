import type { CSSProperties } from "react"
import type { Project } from "@/data/projects"
import Image from "next/image"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project" href={project.slug} target="_blank" rel="noopener noreferrer"
      style={{ "--project-color": project.color } as CSSProperties}>
      <div className="project-icon"><Image src={project.logo} alt="" width={52} height={52} /></div>
      <div className="project-copy">
        <div className="project-heading"><h3>{project.title}</h3>{project.status && <span className="wip">wip</span>}<span className="outward" aria-hidden="true">↗</span></div>
        <p>{project.desc}</p>
        <span className="project-kind">{project.category}</span>
      </div>
      {project.cover && <span className="project-peek" aria-hidden="true"><Image src={project.cover} alt="" width={280} height={175} sizes="280px" /><span>{project.title}</span></span>}
    </a>
  )
}
