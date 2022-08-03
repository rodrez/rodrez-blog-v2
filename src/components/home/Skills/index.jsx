import React, { useState } from 'react'
import { animated } from 'react-spring'

import { skills } from './constants'
import SkillsCarousel from './SkillsCarousel'
function Skills() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <animated.section className="relative mx-auto my-48 mb-20 flex w-full flex-col py-24 px-8 pt-48 lg:flex-row">
      <animated.h3 className="gradient-text absolute left-0 right-0 top-0 mx-auto text-center">
        Skills
      </animated.h3>
      <animated.div className="relative w-52">
        {activeItem !== 0 ? (
          <animated.div
            onClick={() => setActiveItem(0)}
            className="absolute -top-24 left-52 h-16 w-16 rounded-full bg-white p-3 shadow-lg shadow-slate-200 dark:bg-dark-container dark:shadow-slate-900 lg:top-40 lg:left-6"
          >
            {skills[0].icon}
          </animated.div>
        ) : null}

        {activeItem !== 1 ? (
          <animated.div
            onClick={() => setActiveItem(1)}
            className="absolute -top-40 left-4 h-24 w-24 rounded-full bg-white p-5 shadow-lg shadow-slate-200 dark:bg-dark-container dark:shadow-slate-900"
          >
            {skills[1].icon}
          </animated.div>
        ) : null}
        {activeItem !== 2 ? (
          <animated.div
            onClick={() => setActiveItem(2)}
            className="absolute -top-36 left-32 h-20 w-20 rounded-full bg-white p-1 shadow-lg shadow-slate-200 dark:bg-dark-container dark:shadow-slate-900 lg:top-72 lg:left-16"
          >
            {skills[2].icon}
          </animated.div>
        ) : null}
      </animated.div>

      <SkillsCarousel skills={skills} activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="relative w-52 pt-48">
        {activeItem !== 3 ? (
          <animated.div
            onClick={() => setActiveItem(3)}
            className="absolute -top-4 left-24 h-20 w-20 rounded-full bg-white p-2 shadow-lg shadow-slate-200 dark:bg-dark-container dark:shadow-slate-900 lg:-top-16"
          >
            {skills[3].icon}
          </animated.div>
        ) : null}
        {activeItem !== 4 ? (
          <animated.div
            onClick={() => setActiveItem(4)}
            className="absolute top-24 left-20 h-28 w-28 rounded-full bg-white p-5 shadow-lg shadow-slate-200 dark:bg-dark-container dark:shadow-slate-900"
          >
            {skills[4].icon}
          </animated.div>
        ) : null}
        {activeItem !== 5 ? (
          <animated.div
            onClick={() => setActiveItem(5)}
            className="absolute left-8 top-52 h-16 w-16 rounded-full bg-white p-2 shadow-lg shadow-slate-200 dark:bg-dark-container dark:shadow-slate-900"
          >
            {skills[5].icon}
          </animated.div>
        ) : null}
      </div>
    </animated.section>
  )
}

export default Skills
