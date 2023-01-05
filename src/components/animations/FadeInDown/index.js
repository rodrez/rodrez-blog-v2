import { animated, useSpring } from 'react-spring'

function FadeInDownComponent({ show, text, textClass }) {
  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
    },
    to: {
      opacity: show ? 1 : 0,
      transform: show ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
    },
    config: { duration: 600 },
  })
  return (
    <animated.div className={textClass} style={props}>
      {text}
    </animated.div>
  )
}

export { FadeInDownComponent }
