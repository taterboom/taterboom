import { NextPage } from "next"
import Image from "next/image"
import logo from "../assets/cool_tater.png"
import Page from "../components/Page"
import SocialMedia from "../components/SocialMedial"

const Index: NextPage = () => {
  return (
    <Page>
      <div className="flex justify-center items-center flex-col">
        <Image src={logo} width={100} height={100} alt="logo"></Image>
        <h1 className="text-2xl font-bold text-brand text-shadow ">Tater Bomb</h1>
      </div>
      <div className="mt-8">
        <SocialMedia></SocialMedia>
      </div>
    </Page>
  )
}

export default Index
