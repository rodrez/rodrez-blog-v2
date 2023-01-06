import { animated, config, useTransition } from '@react-spring/web'
import Link from 'next/link'

// Elements
const Title = () => (
  <animated.h2 className="text-center md:text-left">
    Hi! I&apos;m <span className="text-primary-600 dark:text-primary-400">Fabian Rodriguez</span>
  </animated.h2>
)

const AboutMe = () => (
  <animated.h6 className={'mt-6 text-center md:text-left'}>
    Welcome! In this blog we will cover, informative and insightful posts about software and
    programming, while I&apos;m learning new things as a{' '}
    <span className="text-primary-600 dark:text-primary-400 "> Software Engineer. </span>
  </animated.h6>
)

const GetInTouch = () => (
  <animated.button>
    <Link
      className={
        'mx-auto mt-6 flex rounded-xl border-0 bg-primary-600 py-2 px-8 text-2xl font-bold text-white hover:bg-opacity-80 dark:bg-primary-400 dark:text-[#000621] lg:mx-0'
      }
      href="/contact"
    >
      Get In Touch
    </Link>
  </animated.button>
)

export default function Intro() {
  const components = [
    {
      component: <Title />,
      // slide from the left
      from: { opacity: 0, x: '-100%' },
      key: 'title',
    },
    {
      component: <AboutMe />,
      // slide from the right
      from: { opacity: 0, x: '100%' },
      key: 'aboutme',
    },
    {
      component: <GetInTouch />,
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
    leave: { opacity: 1 },
    config: config.molasses,
  })

  return (
    <animated.div className={'z-10 order-2 w-full lg:order-1'}>
      {transitions((style, item) => (
        <animated.div key={item} style={style}>
          {item.component}
        </animated.div>
      ))}
    </animated.div>
  )
}
