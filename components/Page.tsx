import Image from "next/image"
import Link from "next/link"
import logo from "../assets/cool_tater.png"
import Nav from "./Nav"

const Page: React.FC = ({ children }) => {
  return (
    <>
      <header className="max-w-[1000px] mx-auto sticky top-0 w-full h-16 px-2 flex justify-between items-center backdrop-blur bg-white/70">
        <Link href="/" passHref>
          <a>
            <Image src={logo} width={48} height={48} alt="logo"></Image>
          </a>
        </Link>
        <Nav></Nav>
      </header>
      <main className="max-w-[1000px] pt-8 mx-auto">{children}</main>
    </>
  )
}

export default Page
