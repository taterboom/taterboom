import { animated, easings, useSpring } from "react-spring"
import TurbulenceLogo from "../components/Logo/TurbulenceLogo"
import type { CommonPage } from "./_app"
import Link from "next/link"
import Button from "../components/Button"
import { MdiEmail, MdiGithub, MdiTwitterCircle } from "../components/Icons"
import Nav from "../components/Nav"

const AnimatedFeGussianblur = animated((props) => <feGaussianBlur {...props} />)

const SocialMedia = () => {
  const attrs = useSpring({
    from: {
      stdDeviation: 2.5,
    },
    to: {
      stdDeviation: 1,
    },
    delay: 1300,
    config: {
      duration: 1000,
      easing: easings.easeOutCubic,
    },
  })
  const styles = useSpring({
    from: { y: -24, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1200,
    config: {
      duration: 600,
      easing: easings.easeOutQuad,
    },
  })
  return (
    <animated.div className="flex justify-center items-center text-3xl" style={styles}>
      <svg className="hidden">
        <filter id="goo">
          <AnimatedFeGussianblur {...attrs} />
          <feColorMatrix mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 4 -1" />
        </filter>
      </svg>
      <Link href="https://github.com/xue1206" passHref>
        <Button type="rounded">
          <MdiGithub style={{ filter: `url(#goo)` }} />
        </Button>
      </Link>
      <Link href="https://twitter.com/didan64037534" passHref>
        <Button type="rounded">
          <MdiTwitterCircle style={{ filter: `url(#goo)` }} />
        </Button>
      </Link>
      <Link href="mailto:xuebagod@gmail.com" passHref>
        <Button type="rounded">
          <MdiEmail style={{ filter: `url(#goo)` }} />
        </Button>
      </Link>
    </animated.div>
  )
}

const Nickname = () => {
  const styles = useSpring({
    from: { y: -24, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 800,
    config: {
      duration: 600,
      easing: easings.easeOutQuad,
    },
  })
  return (
    <>
      <animated.h1
        className="text-2xl font-bold logo-gradient bg-clip-text text-transparent"
        style={styles}
      >
        TaterBomb
      </animated.h1>
    </>
  )
}

const AnimatedTurbulenceLogo = animated((props) => (
  <TurbulenceLogo
    className=" w-[375px] h-[375px] sm:w-[512px] sm:h-[512px]"
    style={props.style}
  ></TurbulenceLogo>
))

const AnimatedLogo = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 300,
      easing: easings.easeOutQuad,
    },
  })
  return <AnimatedTurbulenceLogo style={styles} />
}

const Stage = () => {
  const styles = useSpring({
    from: { y: -24, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
    config: {
      duration: 600,
      easing: easings.easeOutQuad,
    },
  })
  return (
    <animated.div className="flex justify-center" style={styles}>
      <Nav></Nav>
    </animated.div>
  )
}

const Index: CommonPage = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center">
      <AnimatedLogo />
      <Nickname />
      <div className="mt-8">
        <Stage></Stage>
      </div>
      <div className="mt-8">
        <SocialMedia></SocialMedia>
      </div>
    </div>
  )
}

Index.custom = true

export default Index
