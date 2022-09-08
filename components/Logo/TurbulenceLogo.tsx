import { animated, useSpring, easings } from "react-spring"
import Logo from "./Logo"

const AnimatedFeTurbulence = animated((props) => <feTurbulence {...props} />)
const AnimatedFeGaussianBlur = animated((props) => <feGaussianBlur {...props} />)

type TurbulenceLogoProps = {
  children?: React.ReactNode
}

const TurbulenceLogo = (props: TurbulenceLogoProps) => {
  const attrs = useSpring({
    from: { baseFrequency: 0.02 },
    to: { baseFrequency: 0 },
    config: {
      duration: 2000,
      easing: easings.easeOutCubic,
    },
  })
  return (
    <div>
      <svg style={{ display: "none" }}>
        <filter id="turbulence">
          <AnimatedFeTurbulence numOctaves="2" {...attrs} />
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="16"
            in="SourceGraphic"
          />
        </filter>
      </svg>
      <Logo width={256} height={256} filter="url(#turbulence)"></Logo>
    </div>
  )
}

export default TurbulenceLogo
