"use client"

import Link from "next/link"
import Button from "../../components/Button"
import GlowDisplay from "../../components/awesome-css/Glow/GlowDisplay"
import NeumorphismDisplay from "../../components/awesome-css/Neumorphism/NeumorphismDisplay"
import MaskDisplay from "../../components/awesome-css/Mask/MaskDisplay"
import AreaLightDisplay from "@/components/awesome-css/AreaLight/AreaLightDisplay"

const PATH_PREFIX = "/awesome-css"

type ItemConfig = {
  Component: React.ComponentType<any>
  label: string
  link?: string
}

const Items: ItemConfig[] = [
  {
    Component: GlowDisplay,
    label: "Glow",
  },
  {
    Component: NeumorphismDisplay,
    label: "Neumorphism",
    link: "https://neumorphism-design.vercel.app",
  },
  {
    Component: MaskDisplay,
    label: "Mask (works in dark mode)",
  },
  {
    Component: AreaLightDisplay,
    label: "Area Light",
  },
]

function Item(props: { data: ItemConfig }) {
  return (
    <div className="space-y-2 p-4">
      <props.data.Component></props.data.Component>
      <div>
        {props.data.link ? (
          <Link href={props.data.link}>
            <Button>{props.data.label}</Button>
          </Link>
        ) : (
          <Button>{props.data.label}</Button>
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="grid grid-cols-2">
      {Items.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  )
}
