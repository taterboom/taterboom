import Link from "next/link"
import Button from "../../components/Button"
import type { CommonPage } from "../_app"

const PROJECTS = [
  {
    title: "RRCrop",
    slug: "https://www.rrcrop.cyou",
  },
  {
    title: "DaiDai",
    slug: "https://www.daidai.cyou/",
  },
  {
    title: "ETSAP",
    slug: "https://etsap.vercel.app",
    desc: "paste and copy text, transfer text easily between PC and Mobile",
  },
  {
    title: "Rect Stroke",
    slug: "/projects/rect-stroke",
  },
  // {
  //   title: "Props Break",
  //   slug: "/projects/props-break",
  // },
]

const Index: CommonPage = () => {
  return (
    <ul>
      {PROJECTS.map((item) => (
        <li key={item.title}>
          <Link href={item.slug} passHref>
            <Button>{item.title}</Button>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Index
