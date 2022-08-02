import { animated, useSpring } from 'react-spring'

export const SunIconV2 = ({ className, onClick }) => {
  // const whileTap = { scale: 0.95, rotate: 15 }

  // const raysVariants = {
  //   initial: { rotate: 45 },
  //   animate: { rotate: 0, transition },
  // }

  // const coreVariants = {
  //   initial: { scale: 1 },
  //   animate: { scale: 1, transition },
  // }

  const [{ rotate, scale }, set] = useSpring(() => ({ rotate: 0, scale: 1 }))

  return (
    <animated.svg
      onClick={() => {
        onClick()
        set({ rotate: 45, scale: 0.95 })
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Centers the rotation anchor point vertically & horizontally
      style={{ originX: '50%', originY: '50%' }}
      className={'h-8 w-8 fill-current text-dark-yellow' + className}
    >
      <animated.circle
        cx="11.9998"
        cy="11.9998"
        r="5.75375"
        className={'scale-110 text-dark-yellow'}
      />
      <animated.g className={'scale-110'}>
        <circle
          cx="3.08982"
          cy="6.85502"
          r="1.71143"
          className={'scale-110 text-dark-yellow'}
          transform="rotate(-60 3.08982 6.85502)"
          // fill="currentColor"
        />
        <circle
          cx="3.0903"
          cy="17.1436"
          r="1.71143"
          className={'text-dark-yellow '}
          transform="rotate(-120 3.0903 17.1436)"
          // fill="currentColor"
        />
        <circle cx="12" cy="22.2881" r="1.71143" className={'text-dark-yellow '} />
        <circle
          cx="20.9101"
          cy="17.1436"
          r="1.71143"
          className={'text-dark-yellow '}
          transform="rotate(-60 20.9101 17.1436)"
          // fill="currentColor"
        />
        <circle
          cx="20.9101"
          cy="6.8555"
          r="1.71143"
          className={'text-dark-yellow '}
          transform="rotate(-120 20.9101 6.8555)"
        />
        <circle cx="12" cy="1.71143" r="1.71143" className={'text-dark-yellow '} />
      </animated.g>
    </animated.svg>
  )
}
