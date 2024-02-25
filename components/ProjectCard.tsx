import { Project } from "@/pages/projects"

export function TinyProjectCard(props: { project: Project }) {
  return (
    <a className="flex gap-4 items-center" href={props.project.slug} target="_blank">
      <div>
        <img className="object-contain" src={props.project.logo} alt="" width={44} height={44} />
      </div>
      <div>
        <div className="font-bold glow-link">{props.project.title}</div>
        <div className="mt-1 text-sm opacity-75 transition-opacity hover:opacity-90">
          {props.project.desc}
        </div>
      </div>
    </a>
  )
}
