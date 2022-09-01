import Link from "next/link"
import Logo from "./Logo"
import Nav from "./Nav"

const Page: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <header className="max-w-[1024px] mx-auto sticky z-40 top-0 w-full h-16 px-2 flex justify-between items-center backdrop-blur bg-white/70">
        <Link href="/" passHref>
          <a>
            <Logo width={48} height={48}></Logo>
          </a>
        </Link>
        <Nav></Nav>
      </header>
      <main className="max-w-[1024px] pt-8 px-2 mx-auto">{children}</main>
    </>
  )
}

export default Page
