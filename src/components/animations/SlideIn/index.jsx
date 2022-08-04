import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const SlideIn = ({ children, reverse }) => {
  const [inView, setInView] = useState(false)

  const reversed = reverse ? 200 : -200

  const transition = useSpring({
    delay: 300,
    from: {
      opacity: 0,
      x: reversed,
    },
    to: {
      x: !inView ? 0 : reversed,
      opacity: !inView ? 0 : 1,
    },
    leave: {
      x: !inView ? reversed : 0,
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

export default SlideIn
