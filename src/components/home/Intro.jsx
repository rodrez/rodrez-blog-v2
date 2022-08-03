import Link from 'next/link'
import { animated, config, useTransition } from 'react-spring'

// Elements
const Title = () => (
  <animated.h2 className="text-center md:text-left">
    Hi! I&apos;m <span className="gradient-text">Fabian Rodriguez</span>
  </animated.h2>
)

const AboutMe = () => (
  <animated.h6 className={'mt-6 text-center md:text-left'}>
    Welcome to my blog. In this blog I share all my thoughts and experiences, while I&apos;m
    learning new things as a <span className="gradient-text "> Software Engineer </span> /
    <span className="gradient-text"> Full Stack Developer </span>. My current focus is Python, and
    Web Development.
  </animated.h6>
)

const GetInTouch = () => (
  <Link href="/contact" passHref>
    <animated.button
      className={
        'main-color mx-auto mt-6 flex rounded-xl border-0 py-2 px-8 text-2xl font-bold text-white hover:bg-opacity-80 lg:mx-0'
      }
    >
      Get In Touch
    </animated.button>
  </Link>
)

export default function Intro() {
  const components = [
    {
      component: Title,
      // slide from the left
      from: { opacity: 0, x: '-100%' },
      key: 'title',
    },
    {
      component: AboutMe,
      // slide from the right
      from: { opacity: 0, x: '100%' },
      key: 'aboutme',
    },
    {
      component: GetInTouch,
      // slide from the bottom
      from: { opacity: 0, x: '100%' },
      key: 'getintouch',
    },
  ]

  // Transition the components
  const transitions = useTransition(components, {
    trail: 500,
    from: (item) => item.from,
    enter: { opacity: 1, x: '0%' },
    config: config.molasses,
  })

  return (
    <animated.div className={'order-2 w-full lg:order-1'}>
      {transitions((style, item) => (
        <animated.div key={item} style={style}>
          <item.component />
        </animated.div>
      ))}
    </animated.div>
  )
}
