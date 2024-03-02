import Link from "next/link"
import Logo from "./Logo/Logo"
import Nav from "./Nav"
import clsx from "classnames"

type PageProps = {
  children?: React.ReactNode
  logo?: boolean
  nav?: boolean
  fixedNav?: boolean
  squeeze?: boolean
}

const Page = ({ children, logo, nav, fixedNav, squeeze }: PageProps) => {
  const containerClassname = clsx(
    "w-full",
    fixedNav &&
      "sticky z-40 top-0 header-bg backdrop-saturate-150 backdrop-blur-md border-b border-white/10"
  )
  const wrapperClassname = clsx(
    "mx-auto h-16 px-2 flex items-center",
    logo && fixedNav ? "justify-between" : "justify-end",
    squeeze && "max-w-[960px]"
  )

  return (
    <>
      <header className={containerClassname}>
        <div className={wrapperClassname}>
          {logo && (
            <Link href="/" passHref className={clsx(!fixedNav && "fixed left-2 z-30")}>
              <Logo width={48} height={48}></Logo>
            </Link>
          )}
          {nav && <Nav></Nav>}
        </div>
      </header>
      <main className="max-w-[960px] pt-8 px-2 mx-auto">{children}</main>
    </>
  )
}

export default Page
