import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const FadeIn = ({ children }) => {
  const [inView, setInView] = useState(false)

  const transition = useSpring({
    delay: 300,
    duration: 1000,
    from: {
      opacity: 0,
    },
    to: {
      opacity: !inView ? 0 : 1,
    },
    leave: {
      opacity: !inView ? 1 : 0,
    },
    config: config.molasses,
  })

  return (
    <Waypoint onEnter={() => setInView(true)} onLeave={() => setInView(false)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  )
}

export default FadeIn
