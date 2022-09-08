import { animated, useSpring } from "react-spring"
import TurbulenceLogo from "../components/Logo/TurbulenceLogo"
import SocialMedia from "../components/SocialMedial"
import type { CommonPage } from "./_app"

const AnimatedFePointLight = animated((props) => <fePointLight {...props}></fePointLight>)

const Nickname = () => {
  const attrs = useSpring({
    from: { x: -60, y: 16, z: 20 },
    to: { x: 160, y: 16, z: 20 },
    delay: 1200,
    config: {
      duration: 600,
    },
  })
  return (
    <>
      <h1
        className="text-2xl font-bold text-brand text-shadow "
        style={{ filter: `url(#specularLighting)` }}
      >
        TaterBomb
      </h1>
      <svg style={{ height: 1 }}>
        <filter id="specularLighting">
          <feSpecularLighting
            in="SourceGraphic"
            result="light"
            lightingColor="white"
            specularExponent="20"
          >
            <AnimatedFePointLight {...attrs} />
          </feSpecularLighting>
          <feComposite in="SourceGraphic" operator="arithmetic" k2="1" k3="1" />
        </filter>
      </svg>
    </>
  )
}

const Index: CommonPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <TurbulenceLogo></TurbulenceLogo>
        <Nickname />
      </div>
      <div className="mt-8">
        <SocialMedia></SocialMedia>
      </div>
    </>
  )
}

export default Index
