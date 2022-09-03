import { NextPage } from "next"
import Logo from "../components/Logo"
import Page from "../components/Page"
import SocialMedia from "../components/SocialMedial"
import type { CommonPage } from "./_app"

const Index: CommonPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Logo width={120} height={120}></Logo>
        <h1 className="text-2xl font-bold text-brand text-shadow ">Tater Bomb</h1>
      </div>
      <div className="mt-8">
        <SocialMedia></SocialMedia>
      </div>
    </>
  )
}

export default Index
