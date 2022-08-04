import { animated, useSpring } from 'react-spring'

const BounceWrapper = ({
  delay = 1000,
  duration = 2000,
  children,
  reverse = false,
  x,
  ...props
}) => {
  const subtleBounce = useSpring({
    loop: { reverse: true },
    from: { y: reverse ? 10 : 0 },
    to: { y: reverse ? 0 : 10 },
    delay: delay,
    config: { tension: 300, friction: 10, duration: duration },
  })

  const subtleTwist = useSpring({
    // Rotate the element horizontally
    loop: { reverse: true },
    from: { rotateX: reverse ? 45 : 0, x: 0 },
    to: { rotateX: reverse ? 0 : 45, x: 0 },
    delay: delay,
    config: { tension: 300, friction: 10, duration: duration },
  })

  return (
    <animated.div {...props} style={x ? subtleTwist : subtleBounce}>
      {children}
    </animated.div>
  )
}

export default BounceWrapper
