import Link from "next/link"
import Button from "../../components/Button"
import type { CommonPage } from "../_app"

const PROJECTS = [
  {
    title: "tab-controller",
    slug: "https://chrome.google.com/webstore/detail/tab-controller/bnampjhjfnfghiclahecmdkbmiebhfbo",
  },
  {
    title: "ChatSwaggerType",
    slug: "https://chrome.google.com/webstore/detail/chatswaggertype/lkminimpgnlpggmkanlhiahjafjnllfk",
  },
  {
    title: "RRCrop",
    slug: "https://www.rrcrop.cyou",
  },
  {
    title: "DaiDai",
    slug: "https://chrome.google.com/webstore/detail/daidai/khcaoeekfbjiiipcjpegbniimnmomafo",
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
  {
    title: "PDJ",
    slug: "https://chrome.google.com/webstore/detail/pdj/edgpjjbejcjkgnlnehoballnhokglenj",
  },
  // {
  //   title: "Props Break",
  //   slug: "/projects/props-break",
  // },
  {
    title: "CompositeX",
    slug: "https://compositex.taterboom.com/",
  },
]

const Index: CommonPage = () => {
  return (
    <ul className="flex flex-col gap-4">
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
