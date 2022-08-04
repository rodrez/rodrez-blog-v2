import { useEffect, useRef, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

export default function AnimatedBorder({ toggle = false }) {
  //   chain an animation for each side starting from the top left corner
  const parentRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  const getParentWidthAndHeight = () => {
    const { width, height } = parentRef.current.getBoundingClientRect()
    return { width, height }
  }

  //   Animate the path from the top left corner to the bottom right corner
  const [length, setLength] = useState(null)
  const animatedStyle = useSpring({
    // strokeDasharray: length,
    // strokeDashoffset: toggle ? 0 : length,
    // duration: 1000,

    to: {
      strokeDashoffset: toggle ? 0 : length,
      strokeDasharray: length,
    },
    // config: config.molasses,
    duration: 500,
  })

  useEffect(() => {
    setSize(getParentWidthAndHeight())
  }, [])

  return (
    <div ref={parentRef} className=" absolute top-0 left-0 h-full w-full">
      <animated.svg viewBox={`0 0 ${size.width} ${size.height}`}>
        <animated.path
          style={animatedStyle}
          ref={(ref) => {
            // The ref is `null` on component unmount
            if (ref) {
              setLength(ref.getTotalLength())
            }
          }}
          id="thePath"
          // "M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z
          // d={`M0,0L${size.width},0  ${size.width},${size.height} 0,${size.height} 0,0`}
          d={`M0,0L${size.width},0  ${size.width},${size.height} 0,${size.height} 0,0`}
          fill="none"
          rx={size.width / 2}
          ry={size.height / 2}
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </animated.svg>
    </div>
  )
}
