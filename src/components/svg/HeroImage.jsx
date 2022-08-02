import React from 'react'
import { useTheme } from 'next-themes'
import { animated } from 'react-spring'

const HeroImage = ({ className }) => {
  const { resolvedTheme } = useTheme()

  return (
    <animated.svg
      className={className}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1584 792"
      style={{ enableBackground: 'new 0 0 1584 792' }}
    >
      <filter
        filterUnits="objectBoundingBox"
        height="531.2%"
        id="g"
        width="575.9%"
        x="-237.9%"
        y="-215.6%"
      >
        <feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="24"
        ></feGaussianBlur>

        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0.0941176471 0 0 0 0 0.137254902 0 0 0 0 0.203921569 0 0 0 0.04 0"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <filter
        filterUnits="objectBoundingBox"
        height="330%"
        id="b"
        width="259.5%"
        x="-79.8%"
        y="-115%"
      >
        <feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="24"
        ></feGaussianBlur>

        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0.0941176471 0 0 0 0 0.137254902 0 0 0 0 0.203921569 0 0 0 0.04 0"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <g>
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.5,
            },
          }}
          className="st0"
          d="M874.8,708.5l-4,56.8c-0.7,10.1,9.2,17.6,18.8,14.1l159.1-57.9c5.2-1.9,8.8-6.7,9.2-12.2l4-56.8
        c0.7-10.1-9.2-17.6-18.8-14.1L884,696.3C878.8,698.2,875.2,703,874.8,708.5z"
        />
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.7,
            },
          }}
          className="st1"
          d="M573.8,687.2l-3.9,56.8c-0.7,10.1,9.2,17.6,18.8,14.1l534.5-194.5c5.2-1.9,8.8-6.7,9.2-12.2l3.9-56.8
        c0.7-10.1-9.2-17.6-18.8-14.1L583,675C577.8,676.9,574.2,681.7,573.8,687.2z"
        />
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.3,
            },
          }}
          className="st2"
          d="M792.8,474.1l-3.9,56.8c-0.7,10.1,9.2,17.6,18.8,14.1l534.5-194.5c5.2-1.9,8.8-6.7,9.2-12.2l3.9-56.8
        c0.7-10.1-9.2-17.6-18.8-14.1L802,461.9C796.8,463.8,793.2,468.6,792.8,474.1z"
        />
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
          className="st3"
          d="M443.8,471.5l-4,56.8c-0.7,10.1,9.2,17.6,18.8,14.1l159.1-57.9c5.2-1.9,8.8-6.7,9.2-12.2l4-56.8
        c0.7-10.1-9.2-17.6-18.8-14.1L453,459.3C447.8,461.2,444.2,466,443.8,471.5z"
        />

        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="-165.39"
          y1="935.3489"
          x2="-165.9282"
          y2="934.8112"
          gradientTransform="matrix(200 0 0 -99.9998 33677 93676.8203)"
        >
          <stop
            offset="0"
            style={{
              stopColor: resolvedTheme === 'dark' ? '#5AF97D' : '#6b2cf5',
              stopOpacity: '0.24',
            }}
          />
          <stop
            offset="1"
            style={{
              stopColor: resolvedTheme === 'dark' ? '#7AFA96' : '#7D46DE',
              stopOpacity: '0.24',
            }}
          />
        </linearGradient>
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
          className="st4"
          d="M544,220l100-50.4l-96.8-48.8c-2-1-4.4-1-6.4,0L444,169.6L544,220z"
        />
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
          className="st5"
          d="M643,210l-100,49.9v-40L643,170V210z"
        />
        <animated.path
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -8, 0, -5, 0],
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
          className="st6"
          d="M544,259.9L444,210v-40l100,49.9V259.9z"
        />
        <animated.g
          // animate={{
          //   y: [0, -8, 0, -5, 0],
          //   transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: .5 }
          // }}
          transform="rotate(-133 358.236 311.158)"
          className="st7"
        >
          <animated.g
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -8, 0, -5, 0],
              transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="259.5251"
              y1="-500.1183"
              x2="259.5251"
              y2="-499.1923"
              gradientTransform="matrix(-117.0206 62.809 125.4894 58.5702 93216.2891 12998.6973)"
            >
              <stop
                offset="0"
                style={{
                  stopColor: resolvedTheme === 'dark' ? '#6BFA8A' : '#8A6BFA',
                  stopOpacity: '0.24',
                }}
              />
              <stop
                offset="1"
                style={{
                  stopColor: resolvedTheme === 'dark' ? '#98FBAD' : '#ad98fb',
                }}
              />
            </linearGradient>
            <path
              className="st8"
              d="M87,86.7l85.8-43.3L89.7,1.5c-1.7-0.9-3.8-0.9-5.5,0l-83,41.9L87,86.7L87,86.7z"
            />
          </animated.g>
          <animated.g
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -8, 0, -5, 0],
              transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            <linearGradient
              id="SVGID_3_"
              gradientUnits="userSpaceOnUse"
              x1="260.219"
              y1="-500.5362"
              x2="259.219"
              y2="-500.0531"
              gradientTransform="matrix(-58.5106 55.9274 62.7451 52.153 46803.5898 11613.8496)"
            >
              <stop
                offset="0"
                style={{
                  stopColor: resolvedTheme === 'dark' ? '#7AFA96' : '#967afa',
                  stopOpacity: '0.64',
                }}
              />
              <stop
                offset="1"
                style={{
                  stopColor: resolvedTheme === 'dark' ? '#B5FCC5' : '#c6b5fc',
                }}
              />
            </linearGradient>
            <polygon className="st9" points="172.3,76.8 86.5,119.2 86.5,85.2 172.3,42.8 			" />
          </animated.g>
          <animated.g
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -8, 0, -5, 0],
              transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="260.3394"
              y1="-500.7211"
              x2="259.8011"
              y2="-500.1833"
              gradientTransform="matrix(-58.5099 55.9274 62.7444 52.153 46717.418 11614.3457)"
            >
              <stop
                offset="0"
                style={{
                  stopColor: resolvedTheme === 'dark' ? '#7AFA96' : '#967afa',
                }}
              />
              <stop
                offset="1"
                style={{
                  stopColor: resolvedTheme === 'dark' ? '#B5FCC5' : '#c6b5fc',
                }}
              />
            </linearGradient>
            <polygon className="st10" points="86.7,119.7 0.9,77.3 0.9,43.3 86.7,85.7 			" />
          </animated.g>
        </animated.g>

        {/* Cube */}
        <animated.g transform="rotate(-44 1028 -223.824)" className="st11">
          <animated.g
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -8, 0, -5, 0],
              transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            <animated.path
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, -8, 0, -5, 0],
                transition: {
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              }}
              className="st12"
              d="M29,28.9l29-14.6L29.9,0.2c-0.6-0.3-1.3-0.3-1.9,0L0,14.3L29,28.9z"
            />
          </animated.g>
          <animated.g
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -8, 0, -5, 0],
              transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            <animated.path
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, -8, 0, -5, 0],
                transition: {
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              }}
              className="st13"
              d="M48.7,54L28.7,64l0-35.1l29-14.4l0,33.8c0,0.8-0.4,1.5-1.1,1.8L48.7,54L48.7,54z"
            />
          </animated.g>
          <animated.path
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -14.5, 0, -9.5, 0],
              transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
            className="st14"
            d="M29,64L1.1,50.1C0.4,49.7,0,49,0,48.3l0-33.8l29,14.4L29,64L29,64z"
          />
        </animated.g>
        {/* Cube */}
      </g>
      <animated.path
        initial={{ y: 0, x: 0 }}
        animate={{
          y: [0, -8, 0, -5, 0],
          transition: {
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        }}
        className="st15"
        d="M1089.8,708.5l-4,56.8c-0.7,10.1,9.2,17.6,18.8,14.1l159.1-57.9c5.2-1.9,8.8-6.7,9.2-12.2l4-56.8
      c0.7-10.1-9.2-17.6-18.8-14.1L1099,696.3C1093.8,698.2,1090.2,703,1089.8,708.5z"
      />
    </animated.svg>
  )
}

export default HeroImage
