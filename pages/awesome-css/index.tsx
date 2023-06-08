import Link from "next/link"
import Button from "../../components/Button"
import GlowDisplay from "../../components/awesome-css/Glow/GlowDisplay"
import NeumorphismDisplay from "../../components/awesome-css/Neumorphism/NeumorphismDisplay"
import MaskDisplay from "../../components/awesome-css/Mask/MaskDisplay"

const PATH_PREFIX = "/awesome-css"

type ItemConfig = {
  Component: React.ComponentType<any>
  label: string
  link: string
}

const Items: ItemConfig[] = [
  {
    Component: GlowDisplay,
    label: "Glow",
    link: `${PATH_PREFIX}/glow`,
  },
  {
    Component: NeumorphismDisplay,
    label: "Neumorphism",
    link: "https://neumorphism-design.vercel.app",
  },
  {
    Component: MaskDisplay,
    label: "Mask",
    link: `${PATH_PREFIX}/mask`,
  },
]

function Item(props: { data: ItemConfig }) {
  return (
    <div className="space-y-2 p-4">
      <props.data.Component></props.data.Component>
      <div>
        <Link href={props.data.link}>
          <Button>{props.data.label}</Button>
        </Link>
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
