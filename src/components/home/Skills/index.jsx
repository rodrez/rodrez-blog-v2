import FadeIn from '@components/animations/FadeIn'
import { classNames } from '@utils/general'
import React, { useState } from 'react'
import { animated } from 'react-spring'

import ScaleIn from '../../animations/ScaleIn'
import { skills } from './constants'
import SkillsCarousel from './SkillsCarousel'

function Skills() {
  const [activeItem, setActiveItem] = useState('Python')

  const skillsBubbles = {
    Python: {
      class: (number) => `top-8 left-0 lg:top-40 lg:left-6  h-${number} w-${number}`,
    },
    JavaScript: {
      class: (number) => `-top-4 right-4 lg:top-12 lg:right-16 h-${number} w-${number}`,
    },
    React: {
      class: (number) => `top-36 right-52 lg:top-36 h-${number} w-${number}`,
    },
    TypeScript: {
      class: (number) => `bottom-4 right-52 h-${number} w-${number}`,
    },
    Django: {
      class: (number) => `top-20 left-52 h-${number} w-${number}`,
    },
    NextJS: {
      class: (number) => `bottom-12 left-52 lg:bottom-12 lg:left-20 h-${number} w-${number}`,
    },
    Tailwind: {
      class: (number) => `bottom-0 left-32 lg:bottom-8 lg:left-1/2 h-${number} w-${number}`,
    },
  }

  return (
    <animated.section className="relative z-10 mx-auto my-20 flex w-full flex-col items-center justify-center py-24 pt-48">
      <animated.h3 className="mx-auto mt-6 mb-6 text-center text-primary-600 dark:text-primary-400">
        Skills
      </animated.h3>
      {/* Skill Bubbles */}
      <div className="absolute h-full w-full">
        {Object.keys(skills).map((skill, index) => {
          const Icon = skills[skill].icon
          return (
            <ScaleIn
              delay={index * 250}
              duration={2000}
              className={classNames(
                skillsBubbles[skill].class(20),
                'absolute flex items-center justify-center rounded-full bg-white p-3 shadow-lg shadow-slate-200 dark:bg-dark-background dark:shadow-slate-900'
              )}
              key={index}
            >
              <Icon className="h-12 w-12" />
            </ScaleIn>
          )
        })}
      </div>
      {/* Skill Bubbles End */}
      <FadeIn>
        <SkillsCarousel skills={skills} activeItem={activeItem} setActiveItem={setActiveItem} />
      </FadeIn>
    </animated.section>
  )
}

export default Skills
