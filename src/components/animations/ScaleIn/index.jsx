import { animated, config, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'
import { Waypoint } from 'react-waypoint'

const ScaleIn = ({ children, delay, duration, reverse, ...props }) => {
  const [inView, setInView] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false)

  const scaleIn = useSpring({
    delay: delay || 500,
    duration: duration || 1000,
    from: {
      scale: 0,
      y: 0,
    },
    to: {
      scale: !inView ? 0 : 1,
      y: !inView ? 0 : 10,
    },
    config: config.molasses,
  })

  const bounce = useSpring({
    loop: { reverse: true },
    from: { y: !inView ? 10 : 0 },
    to: { y: !inView ? 0 : 10 },
    delay: delay || 300,
    config: { tension: 300, friction: 10, duration: duration },
  })

  useEffect(() => {
    // wait 2 seconds before setting isBouncing to true
    if (inView) {
      setTimeout(() => {
        setIsBouncing(true)
      }, 2000)
    } else {
      setIsBouncing(false)
    }
  }, [inView])

  return (
    <Waypoint onEnter={() => setInView(true)} onLeave={() => setInView(false)}>
      <animated.div {...props} style={isBouncing ? bounce : scaleIn}>
        {children}
      </animated.div>
    </Waypoint>
  )
}

export default ScaleIn
