import { NextPage } from "next"
import Link from "next/link"
import Button from "../../components/Button"
import Page from "../../components/Page"

const Index: NextPage = () => {
  return (
    <Page>
      <Link href="/projects/props-break" passHref>
        <Button>Props Break</Button>
      </Link>
      <Link href="/projects/rect-stroke" passHref>
        <Button>Rect Stroke</Button>
      </Link>
      <Link href="https://daidai.taterbomb.top/" passHref>
        <Button>DaiDai</Button>
      </Link>
    </Page>
  )
}

export default Index
