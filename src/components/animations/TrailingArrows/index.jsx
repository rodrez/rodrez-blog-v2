import { animated, useTransition } from '@react-spring/web'

const pathOne = `M0.75 6H11.25 M6 0.75L11.25 6L6 11.25`
const pathTwo = `M15 10L19.5 5.5L15 1`
const pathThree = `M23 10L27.5 5.5L23 1`
const pathFour = `M31 10L35.5 5.5L31 1`

const allPaths = [
  { path: pathOne, opacity: 1 },
  { path: pathTwo, opacity: 0.66 },
  { path: pathThree, opacity: 0.35 },
  { path: pathFour, opacity: 0.25 },
]

export default function TrailingArrows() {
  const transitions = useTransition(allPaths, {
    trail: 700 / allPaths.length,
    from: { opacity: 0, transform: 'translateX(-10px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-10px)' },
  })

  return (
    <animated.svg width="36" height="12" viewBox="0 0 36 12" fill="none" className="">
      {transitions((style, paths) => (
        <animated.path
          style={{ ...style, opacity: paths.opacity }}
          d={paths.path}
          //   style={item.opacity}
          className={'stroke-amber-600 stroke-2 dark:stroke-amber-400'}
          strokeLinecap="round"
          strokeLinejoin="round"
          // style="opacity: 0; transition: opacity 125ms ease 0s;"
        />
      ))}
    </animated.svg>
  )
}
