import React, { useState } from 'react'
import { animated } from 'react-spring'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
import {
  DjangoIcon,
  JavascriptIcon,
  NextJSIcon,
  PythonIcon,
  ReactJsIcon,
  TypescriptIcon,
} from './skillsSVGs'
import { wrap } from '@utils/general'

const SkillIcon = ({ skill }) => {
  return (
    <animated.div
      layout
      layoutId={skill.title}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      exit={{ scale: 0 }}
      className={
        'dark:bg-dark-cover absolute -top-16 left-0 right-0 mx-auto h-32 w-32 overflow-hidden rounded-full bg-slate-200 p-6'
      }
    >
      {skill.icon}
    </animated.div>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function SkillsCarousel({ skills, setActiveItem }) {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `animated` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.

  const skillsIndex = wrap(0, skills.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const getIcon = (skill) => {
    switch (skill.title) {
      case 'React':
        return <ReactJsIcon />
      case 'JavaScript':
        return <JavascriptIcon />
      case 'Python':
        return <PythonIcon />
      case 'Django':
        return <DjangoIcon />
      case 'NextJS':
        return <NextJSIcon />
      case 'TypeScript':
        return <TypescriptIcon />
      default:
        return null
    }
  }

  React.useEffect(() => {
    setActiveItem(page)
  }, [page, setActiveItem])

  return (
    <>
      <div className="dark:bg-dark-cover relative w-[80vw] cursor-grab rounded-2xl bg-white shadow-lg shadow-slate-200 dark:shadow-slate-900 lg:mt-0 lg:w-[60vw]">
        <div
          className={
            'dark:bg-dark-cover absolute -top-16 left-0 right-0 mx-auto h-32 w-32 overflow-hidden rounded-full bg-white p-6 shadow-xl'
          }
        >
          <animated.div>{getIcon(skills[skillsIndex])}</animated.div>
        </div>
        <animated.div className={'mt-12 p-8 lg:mt-0 lg:p-20'}>
          <h3
            className={
              'dark:to-light-green mb-8 bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] bg-clip-text text-center text-4xl text-transparent dark:from-[#b3eb50] lg:text-5xl'
            }
          >
            {skills[skillsIndex].title}
          </h3>
          <p className={'text-center text-2xl'}>{skills[skillsIndex].description}</p>
        </animated.div>
        <animated.div
          onClick={() => paginate(1)}
          className={
            'dark:to-light-green absolute -left-7 top-8 z-20 my-auto h-14 w-14 cursor-pointer rounded-full bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] dark:from-[#b3eb50] lg:top-0 lg:bottom-0'
          }
        >
          <TiChevronLeft className={'dark:text-dark-background h-full w-full text-white'} />
        </animated.div>
        <animated.div
          onClick={() => paginate(-1)}
          className={
            'dark:to-light-green absolute -right-7 bottom-8 z-20 my-auto h-14 w-14 cursor-pointer rounded-full bg-gradient-to-r from-[#6b2cf5] to-[#d450e6] dark:from-[#b3eb50] lg:top-0 lg:bottom-0'
          }
        >
          <TiChevronRight className={'dark:text-dark-background h-full w-full text-white'} />
        </animated.div>
      </div>
    </>
  )
}
