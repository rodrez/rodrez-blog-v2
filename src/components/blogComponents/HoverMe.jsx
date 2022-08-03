import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function HoverMe({ children, meaning, elementId }) {
  const [show, setShow] = React.useState(false)

  // initial={{ scaleY: 0 }}
  // animate={{ scaleY: show ? 1 : 0 }}
  // transition={{ duration: 0.2 }}

  const props = useSpring({
    from: {
      scaleY: 0,
    },
    to: {
      scaleY: show ? 1 : 0,
    },
    config: {
      duration: 0.2,
    },
  })

  // function that checks if the element is outside of the viewport
  const isOutside = (el) => {
    const rect = el.getBoundingClientRect()

    // if the element is outside on the left side of the viewport return right
    if (rect.left < 0) {
      return 'right'
    }
    // if the element is outside on the right side of the viewport return left
    if (rect.right > window.innerWidth) {
      return 'left'
    }
    // if the element is outside on the top side of the viewport return bottom
    if (rect.top < 0) {
      return 'bottom'
    }
    // if the element is outside on the bottom side of the viewport return top
    if (rect.bottom > window.innerHeight) {
      return 'top'
    }
  }

  // function that returns -top-6 or -bottom-6 depending on the position of the element
  const getPosition = (el) => {
    const position = isOutside(el)
    if (position === 'top') {
      return '-top-6'
    } else if (position === 'bottom') {
      return '-bottom-6'
    } else if (position === 'left') {
      return '-left-6'
    } else if (position === 'right') {
      return '-right-6'
    }
  }

  // FIXME: this needs to position the tootlip on the correct side depending on the position of the element
  // React.useEffect(() => {
  //   const el = document.getElementById(elementId)
  //   const position = getPosition(el)
  //   if (position) {
  //     // add the position class to the element
  //     el.classList.add(position)
  //   }
  // }, [])

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
    >
      <span className="font-bold text-r-purple dark:text-light-green"> {children}</span>
      <span className="font-bold text-amber-500">*</span>
      <animated.div
        id={elementId}
        style={{ ...props }}
        className="absolute z-50 w-32 rounded-lg bg-dark-cover p-2 text-xs text-white shadow-md"
      >
        {meaning}
      </animated.div>
    </span>
  )
}
