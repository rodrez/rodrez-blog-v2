import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const FadeBottomUp = ({ children }) => {
  const [inView, setInView] = useState(false)

  const transition = useSpring({
    duration: 1000,
    from: {
      opacity: 0,
      transform: 'translateY(-100px)',
    },
    to: {
      opacity: 1,
      transform: !inView ? 'translateY(-100px)' : 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: !inView ? 'translateY(0px)' : 'translateY(-100px)',
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
