import Link from "next/link"
import Button from "./Button"
import ThemeSwitch from "./ThemeSwitch"

const Nav = () => {
  return (
    <nav className="flex items-center">
      <Link href="/posts">
        <Button>Blog</Button>
      </Link>
      <Link href="/projects">
        <Button>Projects</Button>
      </Link>
      <Link href="/awesome-css">
        <Button>AwesomeCSS</Button>
      </Link>
      <ThemeSwitch></ThemeSwitch>
    </nav>
  )
}

export default Nav
