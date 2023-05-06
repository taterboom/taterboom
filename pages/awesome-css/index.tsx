import Link from "next/link"
import Glow from "../../components/awesome-css/Glow"
import Button from "../../components/Button"

const PATH_PREFIX = "/awesome-css"
const Items = [
  {
    Component: Glow,
    label: "Glow",
    link: `${PATH_PREFIX}/glow`,
  },
]

function Item(props: { data: (typeof Items)[0] }) {
  return (
    <div className="space-y-2 p-4">
      <div className="relative p-px bg-black rounded-2xl overflow-hidden">
        <div className="relative z-10 p-4 bg-black rounded-2xl">
          <props.data.Component />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%,hsla(0,0%,100%,.05) 0deg,hsla(0,0%,100%,.02) 179.41deg,hsla(0,0%,100%,.14) 227.28deg,hsla(0,0%,100%,.012) 271.36deg,hsla(0,0%,100%,.05) 1turn),#111",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%,hsla(0,0%,100%,.2) 0deg,rgba(72,72,72,.2) 179.41deg,#484848 227.28deg,rgba(72,72,72,.2) 271.36deg,hsla(0,0%,100%,.2) 1turn)",
          }}
        ></div>
      </div>
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
