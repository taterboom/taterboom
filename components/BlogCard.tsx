import type { Post } from "@/pages/posts"
import Link from "next/link"

export default function TinyBlogCard(props: { post: Post }) {
  return (
    <Link className="group flex items-center gap-2" href={props.post.slug} passHref>
      <div className="text-sm opacity-80 transition-opacity group-hover:opacity-90">
        {props.post.time}
      </div>
      <div className="glow-link">{props.post.title}</div>
    </Link>
  )
}
