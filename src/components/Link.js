/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const [isHovered, setIsHovered] = useState(false)
  const [ref, bounds] = useMeasure()

  const width = useSpring({
    width: isHovered ? bounds.width : 0,
  })

  if (isInternalLink) {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mr-2 inline-block"
      >
        <Link href={href}>
          <a ref={ref} className="text-primary-600 dark:text-primary-400" {...rest} />
        </Link>
        <animated.div className="h-0.5 bg-primary-600 dark:bg-primary-400" style={width} />
      </div>
    )
  }

  if (isAnchorLink) {
    return (
      <div
        ref={ref}
        className="inline-block"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <a className="text-primary-600 dark:text-primary-400" href={href} {...rest} />
        <animated.div className="h-0.5 w-12 bg-primary-600 dark:bg-primary-400" style={width} />
      </div>
    )
  }

  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      ref={ref}
      className="inline-block"
    >
      <a
        className="text-primary-600 dark:text-primary-400"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
      />
      <animated.div
        className="h-0.5 w-12 rounded bg-primary-600 dark:bg-primary-400"
        style={width}
      />
    </div>
  )
}

export default CustomLink
