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
    </Page>
  )
}

export default Index
