import { CommonPage } from "../_app"

const PropsBreak: CommonPage = () => {
  return (
    <iframe
      className="min-h-screen"
      width="100%"
      height="100%"
      src="https://props-break.vercel.app/"
      allow="clipboard-write"
    ></iframe>
  )
}

PropsBreak.custom = true

export default PropsBreak
