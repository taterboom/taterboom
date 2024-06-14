import { Project } from "@/app/projects/data"
import Image from "next/image"

export function TinyProjectCard(props: { project: Project }) {
  return (
    <a className="flex gap-4 items-center" href={props.project.slug} target="_blank">
      <div className="flex-shrink-0">
        <Image className="object-contain" src={props.project.logo} alt="" width={44} height={44} />
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

export function ProjectCard(props: { project: Project }) {
  return (
    <div
      className="border-4 rounded-xl border-[color:var(--project-card-outline-color)] overflow-hidden"
      style={{ "--project-card-outline-color": props.project.color + "88" } as React.CSSProperties}
    >
      <Image
        src={props.project.cover || props.project.logo}
        alt=""
        width={320}
        height={200}
        className={
          "w-full aspect-[8_/_5] " + (props.project.cover ? "object-cover" : "object-contain")
        }
      />
      <div
        className="flex border-t-4 border-t-[color:var(--project-card-outline-color)]"
        style={{ backgroundColor: props.project.color + "18" }}
      >
        <div className="shrink-0 p-2">
          <Image
            src={props.project.logo}
            alt=""
            width={48}
            height={48}
            className="aspect-square object-contain"
          />
        </div>
        <div className="flex-1 overflow-hidden p-2 px-0">
          <div className="text-base font-bold">{props.project.title}</div>
          <div className="text-sm mt-1">{props.project.desc}</div>
        </div>
      </div>
    </div>
  )
}
