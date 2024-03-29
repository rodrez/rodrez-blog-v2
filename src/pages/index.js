import HomeIntro from '@components/home/Intro'
import Newsletter from '@components/home/Newsletter'
import Projects from '@components/home/Projects'
import Skills from '@components/home/Skills'
import ProgrammingImage from '@components/svg/ProgrammingImage'
import { config as particlesConfig } from '@libs/particles/config'
import { useTheme } from 'next-themes'
import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const About = () => {
  const { resolvedTheme } = useTheme()
  const particlesInit = React.useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

    await loadFull(engine)
  }, [])

  const particlesLoaded = React.useCallback(async (container) => {}, [])
  return (
    <div className={resolvedTheme === 'dark' ? '-mt-6' : ' -mt-6'}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig(resolvedTheme === 'light' ? '#FEE7CC' : '#2F3244')}
      />
      <div className="mx-auto flex w-11/12 flex-col items-center justify-center lg:mt-2 xl:w-11/12 2xl:mt-48">
        <div className="mx-auto mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <HomeIntro />
          <div className={'relative z-10 order-1 h-0 pb-[56.25%] lg:order-2'}>
            {/* <Icon className={'absolute top-0 right-0 h-[100%] w-[100%] lg:scale-[1.75]'} /> */}
            <ProgrammingImage
              className={'absolute top-0 right-0 h-[100%] w-[100%] lg:scale-[1.75]'}
            />
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
