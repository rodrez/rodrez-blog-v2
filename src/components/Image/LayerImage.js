import NextImage from 'next/image'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

// eslint-disable-next-line jsx-a11y/alt-text
const LayerImage = ({ size, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false)
  // change the opacity of the image when hovered
  const { opacity } = useSpring({
    opacity: isHovered ? 1 : 0.6,
    config: { mass: 1, tension: 200, friction: 20 },
  })

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full w-full bg-primary-400"
    >
      <animated.div style={{ opacity }}>
        <NextImage {...rest} height={size} width={size} alt="test" layout="fill" />
      </animated.div>
    </div>
  )
}

export default LayerImage
