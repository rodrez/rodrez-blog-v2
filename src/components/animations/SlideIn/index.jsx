import { animated, config, useInView } from '@react-spring/web'
import { useMediaQuery } from 'react-responsive'

const SlideIn = ({ children, reverse }) => {
  // const [inView, setInView] = useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  let reversed = reverse ? 200 : -200
  reversed = isDesktopOrLaptop ? reversed : 0
  const [ref, springs] = useInView(() => ({
    threshold: 0.5,
    delay: 200,
    from: {
      opacity: 0,
      x: reversed,
    },
    to: {
      x: reversed,
      opacity: 1,
    },
    leave: {
      x: 0,
      opacity: 0,
    },
    config: config.molasses,
  }))

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  )
}

export default SlideIn
