import Link from "next/link"
import Button from "./Button"
import ThemeSwitch from "./ThemeSwitch"

const Nav = () => {
  return (
    <nav className="flex items-center">
      <Link href="/posts" passHref>
        <Button>Blog</Button>
      </Link>
      <Link href="/projects" passHref>
        <Button>Projects</Button>
      </Link>
      <ThemeSwitch></ThemeSwitch>
    </nav>
  )
}

export default Nav
