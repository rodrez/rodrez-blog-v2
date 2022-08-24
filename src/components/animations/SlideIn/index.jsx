import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { animated, config, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const SlideIn = ({ children, reverse }) => {
  const [inView, setInView] = useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  let reversed = reverse ? 200 : -200
  reversed = isDesktopOrLaptop ? reversed : 0

  const transition = useSpring({
    delay: 200,
    duration: 400,
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
    <Waypoint onEnter={() => setInView(true)} onLeave={() => setInView(false)} topOffset={'35%'}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  )
}

export default SlideIn
