import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const FadeBottomUp = ({ children }) => {
  const [inView, setInView] = useState(false)

  const transition = useSpring({
    delay: 1000,
    duration: 1000,
    from: {
      transform: 'translateY(500px)',
    },
    to: {
      transform: !inView ? 'translateY(500px)' : 'translateY(0px)',
    },
    leave: {
      transform: !inView ? 'translateY(0px)' : 'translateY(500px)',
    },
    config: config.molasses,
  })

  return (
    <Waypoint onEnter={() => setInView(true)} onLeave={() => setInView(false)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  )
}

export default FadeBottomUp
