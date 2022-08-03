import HomeIntro from '@components/home/Intro'
import Newsletter from '@components/home/Newsletter'
import Projects from '@components/home/Projects'
import Skills from '@components/home/Skills'
import HeroImage from '@components/svg/HeroImage'
import { useTheme } from 'next-themes'
import React from 'react'

const About = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div className={resolvedTheme === 'dark' ? '-mt-6' : ' -mt-6'}>
      <div className="mx-auto flex w-11/12 flex-col items-center justify-center pt-16 md:pt-52 xl:w-11/12">
        <div className="mx-auto mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <HomeIntro />
          {/* TODO: Adjust bg image */}
          <div className={'relative z-10 order-1 h-0 pb-[56.25%] lg:order-2'}>
            <HeroImage className={'absolute top-0 right-0 h-[100%] w-[100%] lg:scale-[1.75]'} />
          </div>
        </div>

        <Skills />
        <Projects />
        <Newsletter />
      </div>
    </div>
  )
}

export default About
