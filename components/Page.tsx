import Link from "next/link"
import Logo from "./Logo/Logo"
import Nav from "./Nav"
import clsx from "classnames"

type PageProps = {
  children?: React.ReactNode
  logo: boolean
  nav: boolean
}

const Page = ({ children, logo, nav }: PageProps) => {
  return (
    <>
      <header className="sticky z-40 top-0 w-full backdrop-blur header-bg">
        <div
          className={clsx(
            "max-w-[1024px] mx-auto h-16 px-2 flex items-center ",
            logo ? "justify-between" : "justify-end"
          )}
        >
          {logo && (
            <Link href="/" passHref>
              <a>
                <Logo width={48} height={48}></Logo>
              </a>
            </Link>
          )}
          {nav && <Nav></Nav>}
        </div>
      </header>
      <main className="max-w-[1024px] pt-8 px-2 mx-auto">{children}</main>
    </>
  )
}

export default Page
