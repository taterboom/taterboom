import { animated, useSpring, easings } from "react-spring"
import Logo, { LogoProps } from "./Logo"

const AnimatedFeTurbulence = animated((props) => <feTurbulence {...props} />)

const TurbulenceLogo = (props: LogoProps) => {
  const attrs = useSpring({
    from: { baseFrequency: 0.012 },
    to: { baseFrequency: 0 },
    config: {
      duration: 1200,
      easing: easings.easeOutQuad,
    },
  })
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="logo-turbulence">
          <AnimatedFeTurbulence numOctaves="2" {...attrs} />
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="16"
            in="SourceGraphic"
          />
        </filter>
      </svg>
      <Logo width={512} height={512} filter="url(#logo-turbulence)" {...props}></Logo>
    </>
  )
}

export default TurbulenceLogo
