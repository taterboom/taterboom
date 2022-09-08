import Link from "next/link"
import { animated, easings, useSpring } from "react-spring"
import Button from "./Button"
import { MdiEmail, MdiGithub, MdiTwitterCircle } from "./Icons"

const AnimatedFeGussianblur = animated((props) => <feGaussianBlur {...props} />)

const SocialMedia = () => {
  const attrs = useSpring({
    from: {
      stdDeviation: 2.5,
    },
    to: {
      stdDeviation: 1,
    },
    // delay: 1000,
    config: {
      duration: 2000,
      easing: easings.easeOutCubic,
    },
  })
  return (
    <div className="flex justify-center items-center text-3xl" style={{ filter: `url(#goo)` }}>
      <svg className="hidden">
        <filter id="goo">
          <AnimatedFeGussianblur {...attrs} />
          <feColorMatrix mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 4 -1" />
        </filter>
      </svg>
      <Link href="https://github.com/xue1206" passHref>
        <Button type="rounded">
          <MdiGithub />
        </Button>
      </Link>
      <Link href="https://twitter.com/didan64037534" passHref>
        <Button type="rounded">
          <MdiTwitterCircle />
        </Button>
      </Link>
      <Link href="mailto:xuebagod@gmail.com" passHref>
        <Button type="rounded">
          <MdiEmail />
        </Button>
      </Link>
    </div>
  )
}

export default SocialMedia
