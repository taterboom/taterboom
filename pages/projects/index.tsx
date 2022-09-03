import { NextPage } from "next"
import Link from "next/link"
import Button from "../../components/Button"
import Page from "../../components/Page"
import type { CommonPage } from "../_app"

const Index: CommonPage = () => {
  return (
    <>
      <Link href="/projects/props-break" passHref>
        <Button>Props Break</Button>
      </Link>
      <Link href="/projects/rect-stroke" passHref>
        <Button>Rect Stroke</Button>
      </Link>
      <Link href="https://daidai.taterbomb.top/" passHref>
        <Button>DaiDai</Button>
      </Link>
      <Link href="https://www.rrcrop.cyou" passHref>
        <Button>RRCROP</Button>
      </Link>
      <Link href="https://etsap.vercel.app" passHref>
        <Button>ETSAP</Button>
      </Link>
    </>
  )
}

export default Index
