import Link from 'next/link'
import { animated } from 'react-spring'

export default function Intro() {
  return (
    <animated.div className={'order-2 w-full lg:order-1 xl:pt-32'}>
      <animated.h2 className="text-center md:text-left">
        Hi! I&apos;m{' '}
        <span className="bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] bg-clip-text text-transparent dark:from-[#b3eb50] dark:to-light-green ">
          Fabian Rodriguez
        </span>
      </animated.h2>
      <animated.h6 className={' text-center md:text-left'}>
        Welcome to my blog. In this blog I share all my thoughts and experiences, while I&apos;m
        learning new things as a{' '}
        <span className="bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] bg-clip-text text-transparent dark:from-[#b3eb50] dark:to-light-green">
          {' '}
          Software Engineer{' '}
        </span>{' '}
        /
        <span className="bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] bg-clip-text text-transparent dark:from-[#b3eb50] dark:to-light-green">
          {' '}
          Full Stack Developer{' '}
        </span>
        . My current focus is Python, and Web Development.
      </animated.h6>
      <Link href="/contact" passHref>
        <animated.button
          className={
            'mx-auto mt-8 flex rounded-xl border-0 bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] py-2 px-8 text-2xl font-bold text-white hover:bg-opacity-80 dark:from-[#b3eb50] dark:to-light-green dark:text-dark-background lg:mx-0'
          }
        >
          Contact Me
        </animated.button>
      </Link>
    </animated.div>
  )
}
