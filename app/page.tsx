import Logo from "@/components/Logo/Logo"
import { ProjectCard } from "@/components/ProjectCard"
import { PROJECTS } from "@/data/projects"
import { MdiGithub, MdiTwitterCircle, TablerBrandBilibili, XhsIcon, MdiEmail } from "@/components/Icons"

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/taterboom", Icon: MdiGithub },
  { name: "Twitter", href: "https://twitter.com/didan64037534", Icon: MdiTwitterCircle },
  { name: "Bilibili", href: "https://space.bilibili.com/10891731", Icon: TablerBrandBilibili },
  { name: "Xiaohongshu", href: "https://www.xiaohongshu.com/user/profile/60a1db900000000001000726", Icon: XhsIcon },
  { name: "Mail", href: "mailto:xuebagod@gmail.com", Icon: MdiEmail },
]

export default function Home() {
  return (
    <main className="namecard">
      <header className="intro">
        <div className="avatar"><Logo width={112} height={112} aria-hidden="true" /><span className="spark" aria-hidden="true">✦</span></div>
        <h1>TaterBoom</h1>

        <div className="social-links" aria-label="Find me online">
          {SOCIALS.map(({ name, href, Icon }) => (
            <a key={name} href={href} aria-label={name} title={name} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </header>

      <section className="projects" aria-label="Projects">
        <ul className="project-list">
          {PROJECTS.map(project => <li key={project.title}><ProjectCard project={project} /></li>)}
        </ul>
      </section>
    </main>
  )
}
