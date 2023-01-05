import { animated, config, useTrail } from '@react-spring/web'
import React from 'react'
const items = [
  'M0.75 6H11.25 M6 0.75L11.25 6L6 11.25',
  '"M15 10L19.5 5.5L15 1',
  'M23 10L27.5 5.5L23 1',
  'M31 10L35.5 5.5L31 1',
]

const Trail = ({ open }) => {
  const [toggle, set] = React.useState(true)
  const trail = useTrail(items, {
    config: config.molasses,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return trail.map(({ x, ...otherProps }, i) => (
    <animated.svg
      key={items[i]}
      style={{
        ...otherProps,
        transform: x.to((x) => `translate3d(${x}px, 0, 0)`),
      }}
      className="trails-text"
    >
      {items[i]}
    </animated.svg>
  ))
}

function Navigator() {
  const [open, setOpen] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={
        'fixed right-4 top-1/2 z-[1000] flex h-24 w-24 -translate-x-1/2 flex-col bg-red-500'
      }
    >
      {/* Down Arrows */}
      <svg width="36" height="20" viewBox="0 0 36 12" fill="none" className="rotate-90 transform">
        <path
          className="stroke-cyan-400 stroke-2"
          d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>

        <Trail open={true}>
          <path
            d="M15 10L19.5 5.5L15 1"
            className="stroke-cyan-400 stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            className="stroke-cyan-400 stroke-2"
            d="M23 10L27.5 5.5L23 1"
            strokeOpacity="0.66"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            className="stroke-cyan-400 stroke-2"
            d="M31 10L35.5 5.5L31 1"
            strokeOpacity="0.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </Trail>
      </svg>
      {/* Down Arrows */}
    </div>
  )
}

export default React.memo(Navigator)
