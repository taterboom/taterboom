import Link from "next/link"
import Button from "./Button"

const Nav = () => {
  return (
    <nav>
      <Link href="blog" passHref>
        <Button>Blog</Button>
      </Link>
      <Link href="projects" passHref>
        <Button>Projects</Button>
      </Link>
    </nav>
  )
}

export default Nav
