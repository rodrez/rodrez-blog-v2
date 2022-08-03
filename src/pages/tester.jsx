import Intro from '@components/home/Intro'
import Image from '@components/Image'
import HeroImage from '@components/svg/HeroImage'
import { config as particlesConfig } from '@libs/particles/config'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useTheme } from 'next-themes'
import React, { useCallback, useRef } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import Newsletter from '../components/home/Newsletter'
import Projects from '../components/home/Projects'
import Navigator from '../components/navigator'
import ProgrammingImage from '../components/svg/ProgrammingImage'

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

export default function Tester() {
  const parallax = useRef(null)
  const { theme, resolvedTheme } = useTheme()
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <div
      className="absolute left-0 h-full w-full"
      // style={{ left: 0, width: '100%', height: '100%', background: '#253237' }}
    >
      {/* <Navigator /> */}
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig(resolvedTheme === 'light' ? '#D6F6FC' : '#2F3244')}
        />
      </div>
      <Parallax className="no-scrollbar" ref={parallax} pages={3}>
        <ParallaxLayer
          className="rounded-lg "
          offset={1}
          speed={0.5}
          style={{
            // backgroundColor: resolvedTheme === 'dark' ? '#000621' : '#D6F6FC',
            width: '65%',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: resolvedTheme === 'dark' ? '#032127' : '#87BCDE' }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <Image
            size="100"
            src={url('satellite4')}
            alt="Image1"
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Image size="100" src={url('earth')} alt="Image1" style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            marginTop: '10%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />
        {/* Home Intro */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="mx-auto mb-16 grid w-11/12 grid-cols-1 gap-8 lg:grid-cols-2 xl:w-8/12">
            <div>
              <Intro />
            </div>
            <div className={'relative z-10 order-1 h-0 pb-[56.25%] lg:order-2'}>
              <HeroImage
                className={'absolute top-0 right-0 h-[100%] w-[100%] opacity-0 lg:scale-[1.75]'}
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="mx-auto mb-16 grid w-8/12 grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="opacity-0">
              <Intro />
            </div>
            <div className={'relative z-10 order-1 h-0 pb-[56.25%] lg:order-2'}>
              <ProgrammingImage />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <div className="relative z-[1000]">
            <Newsletter />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
