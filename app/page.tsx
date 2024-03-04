import Logo from "@/components/Logo/Logo"
import { PROJECTS } from "./projects/page"
import { TinyProjectCard } from "@/components/ProjectCard"
import { POSTS } from "@/pages/posts"
import Link from "next/link"
import {
  MdiEmail,
  MdiGithub,
  MdiTwitterCircle,
  TablerBrandBilibili,
  XhsIcon,
} from "@/components/Icons"
import TinyBlogCard from "@/components/BlogCard"

const Home = () => {
  return (
    <div className="w-full min-h-[90vh] max-w-2xl mx-auto pb-8">
      <div className="flex">
        <Logo width={100}></Logo>
        <div className="mt-5 ml-4">
          <h1 className="text-xl font-bold logo-gradient bg-clip-text text-transparent">
            TaterBoom
          </h1>
          <p className="mt-1.5 opacity-80">A web developer, game developer and a trader.</p>
        </div>
      </div>
      <section className="mt-4 p-3.5 space-y-4">
        <Link href="/projects" className="glow-link">
          <h2 className="text-lg ">Projects</h2>
        </Link>
        <div className="space-y-5">
          {PROJECTS.slice(0, 3).map((item) => (
            <TinyProjectCard key={item.title} project={item}></TinyProjectCard>
          ))}
          <Link
            href="/projects"
            className="tiny-underline text-sm opacity-75 transition-opacity glow-link hover:opacity-100"
          >
            more...
          </Link>
        </div>
      </section>
      <section className="mt-4 p-3.5 space-y-4">
        <Link href="/posts" className="glow-link">
          <h2 className="text-lg">Posts</h2>
        </Link>
        <div className="space-y-2">
          {POSTS.slice(0, 5).map((item) => (
            <TinyBlogCard key={item.title} post={item} />
          ))}
          <Link
            href="/posts"
            className="tiny-underline text-sm opacity-75 transition-opacity glow-link hover:opacity-100"
          >
            more...
          </Link>
        </div>
      </section>
      <section className="mt-4 p-3.5 space-y-4">
        <h2 className="text-lg">Find me on</h2>
        <div className="flex gap-2">
          <Link
            className="flex items-center gap-1 glow-link"
            href="https://github.com/taterboom"
            passHref
          >
            <MdiGithub style={{ filter: `url(#goo)` }} />
            <span className="tiny-underline text-sm">Github</span>
          </Link>
          <Link
            className="flex items-center gap-1 glow-link"
            href="https://twitter.com/didan64037534"
            passHref
          >
            <MdiTwitterCircle style={{ filter: `url(#goo)` }} />
            <span className="tiny-underline text-sm">Twitter</span>
          </Link>
          <Link
            className="flex items-center gap-1 glow-link"
            href="https://space.bilibili.com/10891731"
            passHref
          >
            <TablerBrandBilibili />
            <span className="tiny-underline text-sm">Bilibili</span>
          </Link>
          <Link
            className="flex items-center gap-1 glow-link"
            href="https://www.xiaohongshu.com/user/profile/60a1db900000000001000726"
            passHref
          >
            <XhsIcon />
            <span className="tiny-underline text-sm">XiaoHongShu</span>
          </Link>
          <Link
            className="flex items-center gap-1 glow-link"
            href="mailto:xuebagod@gmail.com"
            passHref
          >
            <MdiEmail style={{ filter: `url(#goo)` }} />
            <span className="tiny-underline text-sm">Mail</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
