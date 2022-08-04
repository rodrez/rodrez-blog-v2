import { wrap } from '@utils/general'
import React, { useState } from 'react'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
import { animated } from 'react-spring'
import { useSpringCarousel } from 'react-spring-carousel'

import { skills } from './constants'

export function CarouselItem({ skill, title }) {
  return (
    <div className={'flex w-full flex-col items-center space-y-6 py-6 px-12'}>
      <div className={'flex h-full w-32 items-center overflow-hidden rounded-full p-4'}>
        <skill.icon />
      </div>
      <animated.div
        className={' flex h-full w-full flex-col items-center justify-center space-y-6'}
      >
        <h3 className={'gradient-text h-full text-center text-4xl lg:text-5xl'}>{title}</h3>
        <p className={'text-center text-2xl'}>{skill.description}</p>
      </animated.div>
    </div>
  )
}

export default function SkillsCarousel() {
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `animated` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: true, // -> make me loop!
    items: Object.keys(skills).map((skill, index) => ({
      renderItem: <CarouselItem skill={skills[skill]} title={skill} />,
    })),
  })

  return (
    <div className="relative mx-auto w-[80vw] cursor-grab rounded-2xl bg-white shadow-lg shadow-slate-200 dark:bg-dark-background dark:shadow-slate-900 lg:mt-0 lg:w-[60vw]">
      <div className="overflow-x-hidden">{carouselFragment}</div>
      <animated.button
        onClick={slideToPrevItem}
        className={
          'main-color absolute -left-7 top-8 z-20 my-auto h-14 w-14 cursor-pointer rounded-full lg:top-0 lg:bottom-0'
        }
      >
        <TiChevronLeft className={'h-full w-full text-white'} />
      </animated.button>
      <animated.button
        onClick={slideToNextItem}
        className={
          'main-color absolute -right-7 bottom-8 z-20 my-auto h-14 w-14 cursor-pointer rounded-full lg:top-0 lg:bottom-0'
        }
      >
        <TiChevronRight className={'h-full w-full text-white'} />
      </animated.button>
    </div>
  )
}
