"use client"

import Link from "next/link"
import Button from "../../components/Button"
import GlowDisplay from "../../components/misc/Glow/GlowDisplay"
import NeumorphismDisplay from "../../components/misc/Neumorphism/NeumorphismDisplay"
import MaskDisplay from "../../components/misc/Mask/MaskDisplay"
import AreaLightDisplay from "@/components/misc/AreaLight/AreaLightDisplay"
import Image from "next/image"

const PATH_PREFIX = "/misc"

type ItemConfig = {
  Component: React.ComponentType<any>
  label: string
  link?: string
}

const Items: ItemConfig[] = [
  {
    Component: () => (
      <div className="flex justify-center items-center">
        <Image
          src="/assets/misc/apple-audio-visualization-cover.png"
          width={528}
          height={240}
          alt=""
        />
      </div>
    ),
    label: "Apple Audio Visualization",
    link: "https://apple-audio-visualization.vercel.app/remotion",
  },
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
