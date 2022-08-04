import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

export default function WavyTitle() {
  const [isHovered, setIsHovered] = useState(false)
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses,
  })
  return (
    <animated.div
      style={animation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-10/12"
    >
      Wavy Test
    </animated.div>
  )
}
