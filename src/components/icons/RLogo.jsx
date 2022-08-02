import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { useNavStore } from '../../helpers/store'

export default function RLogo({ className }) {
  const { resolvedTheme } = useTheme()
  const setPage = useNavStore((state) => state.setPage)
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  }

  return (
    <svg
      onClick={() => setPage('Home')}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 726.23 871"
      fill="url(#grad1)"
    >
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: resolvedTheme === 'dark' ? '#b3eb50' : '#6b2cf5',
            stopOpacity: '1',
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: resolvedTheme === 'dark' ? 'rgb(90 249 12)' : 'rgb(255, 0, 255)',
            stopOpacity: '1',
          }}
        />
      </linearGradient>
      <g id="Dot1">
        <motion.circle
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1, ease: 'easeInOut' },
            fill: { duration: 1, ease: [1, 0, 0.8, 1] },
          }}
          cx="88.54"
          cy="466.5"
          r="88"
        />
      </g>
      <g id="Dot2">
        <motion.circle
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          // className='cls-1'
          cx="88.54"
          cy="782.5"
          r="88"
        />
      </g>
      <g id="R">
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85, duration: 1, ease: 'easeInOut' }}
          d="M618.5,105.5h391.88s216.12,19,235.12,250c0,0,36,180-190,273l288,289s-98,110-246,26l-252-248-1-252,144,3,1.08-1.44A126.35,126.35,0,0,0,994.5,300.5h-177S635.5,312.5,618.5,105.5Z"
          transform="translate(-617.96 -105)"
        />
      </g>
    </svg>
  )
}
