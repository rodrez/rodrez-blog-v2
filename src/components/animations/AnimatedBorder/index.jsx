import { animated, config, useSpring } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedBorder({ toggle = false }) {
  const parentRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const cornerRadius = 8

  const getParentWidthAndHeight = () => {
    const { width, height } = parentRef.current.getBoundingClientRect()
    return { width, height }
  }

  const [length, setLength] = useState(null)
  const animatedStyle = useSpring({
    to: {
      strokeDashoffset: toggle ? 0 : length,
      strokeDasharray: length,
    },
    duration: 500,
  })

  useEffect(() => {
    setSize(getParentWidthAndHeight())
  }, [])

  return (
    <div ref={parentRef} className="absolute top-0 left-0 h-full w-full">
      <animated.svg viewBox={`0 0 ${size.width} ${size.height}`}>
        <animated.path
          style={animatedStyle}
          ref={(ref) => {
            if (ref) {
              setLength(ref.getTotalLength())
            }
          }}
          id="thePath"
          d={`M${cornerRadius},0
            H${size.width - cornerRadius}
            A${cornerRadius},${cornerRadius} 0 0 1 ${size.width},${cornerRadius}
            V${size.height - cornerRadius}
            A${cornerRadius},${cornerRadius} 0 0 1 ${size.width - cornerRadius},${size.height}
            H${cornerRadius}
            A${cornerRadius},${cornerRadius} 0 0 1 0,${size.height - cornerRadius}
            V${cornerRadius}
            A${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},0
          `}
          fill="none"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </animated.svg>
    </div>
  )
}
