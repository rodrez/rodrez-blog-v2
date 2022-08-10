import React from 'react'
import { animated, config, useSpring } from 'react-spring'

const AnimatedG = ({ delay = 1000, duration = 2000, children, reverse = false, x }) => {
  const subtleBounce = useSpring({
    loop: { reverse: true },
    from: { y: reverse ? 10 : 0 },
    to: { y: reverse ? 0 : 10 },
    delay: delay,
    config: { tension: 300, friction: 10, duration: duration },
  })

  const subtleTwist = useSpring({
    // Rotate the element horizontally
    loop: { reverse: true },
    from: { rotateX: reverse ? 45 : 0, x: 0 },
    to: { rotateX: reverse ? 0 : 45, x: 0 },
    delay: delay,
    config: { tension: 300, friction: 10, duration: duration },
  })

  return <animated.g style={x ? subtleTwist : subtleBounce}>{children}</animated.g>
}

function ProgrammingImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 400"
    >
      <defs>
        <clipPath id="clippath">
          <path fill="none" d="M0 0H600V400H0z"></path>
        </clipPath>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_29"
          x1="139.84"
          x2="139.84"
          y1="275.2"
          y2="204.01"
          gradientTransform="rotate(-25.04 83.478 195.855)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#dbccff"></stop>
          <stop offset="1" stopColor="#d1bbff"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient"
          x1="139.83"
          x2="139.83"
          y1="277.98"
          y2="206.79"
          gradientTransform="rotate(-25.04 83.478 195.855)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fde68a"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_28"
          x1="139.83"
          x2="139.83"
          y1="260.28"
          y2="230.27"
          gradientTransform="rotate(-25.04 83.478 195.855)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b5a6e7"></stop>
          <stop offset="1" stopColor="#7760bf"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_27"
          x1="135.57"
          x2="144.09"
          y1="230.87"
          y2="230.87"
          gradientTransform="rotate(-25.04 83.478 195.855)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8b8be0"></stop>
          <stop offset="1" stopColor="#a177b7"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_94"
          x1="139.83"
          x2="139.83"
          y1="232.85"
          y2="227.69"
          gradientTransform="rotate(-25.04 83.478 195.855)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#a177b7"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_95"
          x1="144.34"
          x2="144.34"
          y1="263.34"
          y2="230.26"
          gradientTransform="rotate(-25.04 83.478 195.855)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="280.3"
          x2="280.3"
          y1="400"
          y2="310.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f59e0b"></stop>
          <stop offset="1" stopColor="#b45309"></stop>
        </linearGradient>
        <radialGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_83"
          cx="232.5"
          cy="368.65"
          r="27.03"
          fx="232.5"
          fy="368.65"
          gradientTransform="matrix(0 .66 -1.71 0 868.53 213.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4b474b"></stop>
          <stop offset="1"></stop>
        </radialGradient>
        <radialGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_83-2"
          cx="351.33"
          cy="352.81"
          r="27.03"
          fx="351.33"
          fy="352.81"
          gradientTransform="matrix(.66 0 -.00012 1.71 87.07 -237.04)"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_83"
        ></radialGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="251.43"
          x2="274.82"
          y1="368.68"
          y2="368.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcd34d"></stop>
          <stop offset="1" stopColor="#fde68a"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="341.53"
          x2="364.93"
          y1="368.68"
          y2="368.68"
          gradientTransform="matrix(-1 0 0 1 647.63 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcd34d"></stop>
          <stop offset="1" stopColor="#fde68a"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70"
          x1="277.16"
          x2="277.16"
          y1="400"
          y2="310.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ccf"></stop>
          <stop offset="1" stopColor="#755cbb"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-2"
          x1="287.55"
          x2="287.55"
          y1="355.4"
          y2="331.06"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-3"
          x1="259.36"
          x2="259.36"
          y1="346.45"
          y2="322.61"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_354"
          x1="283.54"
          x2="283.54"
          y1="176.45"
          y2="140.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d5cdf8"></stop>
          <stop offset="1" stopColor="#f3edfb"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-4"
          x1="265.21"
          x2="301.87"
          y1="158.61"
          y2="158.61"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="273.06"
          x2="273.06"
          y1="318.73"
          y2="139.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcd34d"></stop>
          <stop offset="1" stopColor="#fde68a"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-5"
          x1="198.59"
          x2="242.29"
          y1="206.92"
          y2="206.92"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="197.24"
          x2="197.24"
          y1="257.17"
          y2="173.26"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcd34d"></stop>
          <stop offset="1" stopColor="#fde68a"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="341.53"
          x2="397.84"
          y1="232.99"
          y2="232.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcd34d"></stop>
          <stop offset="1" stopColor="#dac7f3"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_71"
          x1="178.92"
          x2="178.92"
          y1="161.82"
          y2="139.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stopColor="#ffc2a9"></stop>
          <stop offset="1" stopColor="#ff9595"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_48"
          x1="192.86"
          x2="192.86"
          y1="161.29"
          y2="124.67"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffeadb"></stop>
          <stop offset="0.99" stopColor="#c27cb6"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_71-2"
          x1="191.67"
          x2="191.67"
          y1="186.21"
          y2="129.75"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_71"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_73"
          x1="181.57"
          x2="199.32"
          y1="177.4"
          y2="177.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stopColor="#d1a1d6"></stop>
          <stop offset="0.99" stopColor="#bd89c4"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_71-3"
          x1="399"
          x2="399"
          y1="220.6"
          y2="145.1"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_71"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_48-2"
          x1="407.92"
          x2="407.92"
          y1="196.41"
          y2="158.9"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_48"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_64"
          x1="415.32"
          x2="415.32"
          y1="183.46"
          y2="166.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffb0b0"></stop>
          <stop offset="0.98" stopColor="#ffc2a9"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_64-2"
          x1="425.07"
          x2="425.07"
          y1="186.05"
          y2="176.83"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_64"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_73-2"
          x1="385.63"
          x2="402.78"
          y1="204.43"
          y2="204.43"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_73"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="361.76"
          x2="361.76"
          y1="263.62"
          y2="179.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fde68a"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-9"
          x1="175.69"
          x2="317.04"
          y1="246.59"
          y2="246.59"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fde68a"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4"
          x1="300.31"
          x2="327.32"
          y1="222.94"
          y2="222.94"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ccedff"></stop>
          <stop offset="1" stopColor="#755cbb"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-2"
          x1="275.8"
          x2="315.51"
          y1="270.36"
          y2="270.36"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-3"
          x1="277.64"
          x2="320.06"
          y1="288.31"
          y2="288.31"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-4"
          x1="241.13"
          x2="241.13"
          y1="243.86"
          y2="196.25"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-5"
          x1="244.96"
          x2="244.96"
          y1="247.86"
          y2="211.77"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-6"
          x1="187.93"
          x2="187.93"
          y1="201.73"
          y2="174.46"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-7"
          x1="209.99"
          x2="220.98"
          y1="177.72"
          y2="177.72"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-6"
          x1="329.45"
          x2="329.45"
          y1="243.86"
          y2="193.32"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-7"
          x1="386.27"
          x2="386.27"
          y1="232.99"
          y2="206.58"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-8"
          x1="356.32"
          x2="356.32"
          y1="231.81"
          y2="211.62"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-8"
          x1="182.22"
          x2="182.22"
          y1="203.47"
          y2="195.97"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-9"
          x1="202.25"
          x2="202.25"
          y1="226.33"
          y2="185.35"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-9"
          x1="307.67"
          x2="307.67"
          y1="197.48"
          y2="166.65"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_4-10"
          x1="267.27"
          x2="267.27"
          y1="193.32"
          y2="150.76"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_4"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1="252.9"
          x2="323.99"
          y1="201.1"
          y2="201.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fbbf24"></stop>
          <stop offset="1" stopColor="#d97706"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-10"
          x1="259.03"
          x2="305.29"
          y1="160.08"
          y2="160.08"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-11"
          x1="377.95"
          x2="377.95"
          y1="229.98"
          y2="203.21"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-12"
          x1="340.11"
          x2="340.11"
          y1="260.18"
          y2="179.11"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-13"
          x1="252.95"
          x2="252.95"
          y1="298.26"
          y2="275.02"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_70-14"
          x1="298.09"
          x2="298.09"
          y1="291.88"
          y2="280.59"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_70"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_71-4"
          x1="297.6"
          x2="297.6"
          y1="146.81"
          y2="69.6"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_71"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_71-5"
          x1="268.82"
          x2="268.82"
          y1="115.66"
          y2="92.89"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_71"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_387"
          x1="308.33"
          x2="309.28"
          y1="124.27"
          y2="119.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e1616a"></stop>
          <stop offset="1" stopColor="#ff8883"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_48-3"
          x1="299.71"
          x2="299.71"
          y1="120.46"
          y2="70.73"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_48"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_59"
          x1="297.29"
          x2="297.29"
          y1="100.09"
          y2="90.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#cf6074"></stop>
          <stop offset="1" stopColor="#f37270"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_184"
          x1="316.94"
          x2="316.94"
          y1="103.22"
          y2="94.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#cf6074"></stop>
          <stop offset="1" stopColor="#ff817f"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_48-4"
          x1="317.75"
          x2="317.75"
          y1="108.21"
          y2="88.92"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_48"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_292"
          x1="298.63"
          x2="298.63"
          y1="147.78"
          y2="54.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2e33a0"></stop>
          <stop offset="1" stopColor="#0665a5"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_35"
          x1="323.23"
          x2="323.23"
          y1="88.82"
          y2="67.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffeadb"></stop>
          <stop offset="0.99" stopColor="#8860c7"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_52"
          x1="293.79"
          x2="293.79"
          y1="147.78"
          y2="54.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ccc2db"></stop>
          <stop offset="0.99" stopColor="#8860c7"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_397"
          x1="300.07"
          x2="300.07"
          y1="147.76"
          y2="143.74"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#776d7e"></stop>
          <stop offset="1" stopColor="#9d68c2"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_141"
          x1="311.87"
          x2="311.87"
          y1="60.87"
          y2="57.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1f77d1"></stop>
          <stop offset="1" stopColor="#0686c9"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_141-2"
          x1="292.83"
          x2="292.83"
          y1="70.71"
          y2="61.87"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_141"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_141-3"
          x1="324.85"
          x2="324.85"
          y1="75.19"
          y2="67.22"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_141"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_285"
          x1="272.13"
          x2="261.93"
          y1="110.26"
          y2="97.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffeadb"></stop>
          <stop offset="0.99" stopColor="#b060f4"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_285-2"
          x1="273.2"
          x2="268.18"
          y1="108.65"
          y2="102.51"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_285"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_141-4"
          x1="292.24"
          x2="309.51"
          y1="71.5"
          y2="71.5"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_141"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_141-5"
          x1="316.6"
          x2="321.83"
          y1="123.14"
          y2="123.14"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_141"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_141-6"
          x1="310.13"
          x2="315.78"
          y1="119.24"
          y2="119.24"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_141"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_89"
          x1="351.8"
          x2="528.85"
          y1="132.95"
          y2="132.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9d68c2"></stop>
          <stop offset="1" stopColor="#aec2ff"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_85"
          x1="387.81"
          x2="387.81"
          y1="199.82"
          y2="146.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ccedff"></stop>
          <stop offset="1" stopColor="#9d68c2"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_85-2"
          x1="478.87"
          x2="478.87"
          y1="173.78"
          y2="150.26"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_85"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_85-3"
          x1="506.63"
          x2="506.63"
          y1="173.78"
          y2="150.26"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_85"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_85-4"
          x1="450.66"
          x2="450.66"
          y1="173.78"
          y2="150.26"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_85"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1="197.67"
          x2="197.67"
          y1="115.99"
          y2="91.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d97706"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x1="212.72"
          x2="212.72"
          y1="115.99"
          y2="91.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d97706"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_115"
          x1="193.4"
          x2="206.71"
          y1="375.37"
          y2="269.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#067eff"></stop>
          <stop offset="1" stopColor="#3e37a0"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_302"
          x1="504.25"
          x2="504.25"
          y1="113.31"
          y2="104.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#459fff"></stop>
          <stop offset="1" stopColor="#a96dff"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_302-2"
          x1="84.26"
          x2="84.26"
          y1="218.04"
          y2="206.92"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_302"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-13"
          x1="517.37"
          x2="517.37"
          y1="113.31"
          y2="104.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d97706"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x1="229.2"
          x2="229.2"
          y1="142.73"
          y2="136.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d97706"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-15"
          x1="440.86"
          x2="440.86"
          y1="282.16"
          y2="275.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ea580c"></stop>
          <stop offset="1" stopColor="#fb923c"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-16"
          x1="112.34"
          x2="112.34"
          y1="313.33"
          y2="307.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ea580c"></stop>
          <stop offset="1" stopColor="#fb923c"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-17"
          x1="136.04"
          x2="136.04"
          y1="282.77"
          y2="236.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d97706"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-18"
          x1="458.23"
          x2="458.23"
          y1="348.82"
          y2="290.45"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d97706"></stop>
          <stop offset="1" stopColor="#fbbf24"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_206"
          x1="404.32"
          x2="399.35"
          y1="275.2"
          y2="232.51"
          gradientTransform="rotate(15.07 238.507 213.183)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1852a0"></stop>
          <stop offset="1" stopColor="#067ed3"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_206-2"
          x1="399.5"
          x2="399.5"
          y1="275.37"
          y2="231.62"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_206"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_107"
          x1="361.94"
          x2="358.72"
          y1="289.27"
          y2="261.66"
          gradientTransform="rotate(19.3 784.38 415.288) scale(1 1.57)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#188dc1"></stop>
          <stop offset="1" stopColor="#06bfe7"></stop>
        </linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_107-2"
          x1="412.35"
          x2="423.68"
          y1="88.1"
          y2="46.01"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_107"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_206-3"
          x1="392.87"
          x2="401.32"
          y1="83.24"
          y2="51.86"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_206"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_107-3"
          x1="121.92"
          x2="129.65"
          y1="160.57"
          y2="131.88"
          gradientTransform="matrix(-1 0 0 1 206.66 0)"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_107"
        ></linearGradient>
        <linearGradient
          id="_Áåçûìÿííûé_ãðàäèåíò_206-4"
          x1="108.65"
          x2="114.41"
          y1="157.26"
          y2="135.87"
          gradientTransform="matrix(-1 0 0 1 206.66 0)"
          xlinkHref="#_Áåçûìÿííûé_ãðàäèåíò_206"
        ></linearGradient>
      </defs>
      <g style={{ isolation: 'isolate' }}>
        <g clipPath="url(#clippath)">
          <g fill="#f1f1f4">
            <path d="M148.21 196.1c0-.25.13-.36.35-.36l6.71.2c.66.02 1.23.12 1.69.3.46.18.83.43 1.11.75.28.32.47.69.59 1.14s.17.93.15 1.47l-.06 1.84c-.02.54-.1 1.03-.24 1.46-.14.43-.36.8-.66 1.1-.3.3-.68.52-1.15.68-.47.15-1.04.22-1.7.2l-3.61-.11-.75-2.11h-.1l-.06 2.08-2.53-.08.26-8.57zm2.34 6.33l4.29.13c.48.01.83-.08 1.04-.29.21-.21.32-.58.34-1.12l.05-1.5c.02-.56-.07-.94-.27-1.15-.2-.21-.54-.32-1.02-.33l-4.1-.12c-.06 0-.1.02-.14.05a.21.21 0 00-.05.13l-.13 4.2zM162.45 199.93h-.09l-.08 2.68c0 .11.05.17.17.18l7.54.23-.07 2.32-9.89-.3c-.24 0-.35-.13-.35-.38l.25-8.21c0-.25.13-.36.37-.36l9.61.29c.25 0 .37.13.36.38l-.07 2.32-2.37.8h-.1l.04-1.19c0-.09-.04-.14-.12-.14l-5.07-.15c-.07 0-.11.02-.13.05-.02.04-.03.08-.03.12l-.03 1.12 4.18.13-.06 1.82-3.5-.11-.54-1.59zM179.21 199.77h-.1l.03-.99c0-.1-.04-.15-.14-.15l-4.72-.14c-.17 0-.29.03-.36.1s-.1.18-.11.32v.22c-.01.17.01.28.07.33.06.05.17.09.33.12l5.53.94c.35.06.65.15.89.25.24.11.44.25.59.42.15.17.25.38.31.63s.08.54.07.88l-.02.71c-.01.37-.07.69-.17.97s-.25.51-.46.7c-.21.19-.49.32-.82.41-.34.09-.75.12-1.24.11l-7.96-.24.07-2.32 7.14.22c.21 0 .36-.03.43-.1.07-.08.11-.21.12-.41v-.25c.01-.16-.01-.27-.06-.33-.05-.06-.15-.11-.31-.13l-5.34-.84c-.36-.06-.67-.14-.92-.25-.25-.11-.46-.24-.62-.41-.16-.17-.27-.37-.34-.61s-.09-.52-.08-.85l.02-.63c.02-.65.21-1.14.56-1.49.36-.35.93-.51 1.74-.48l7.95.24c.25 0 .38.14.37.4l-.06 1.84-2.37.79zM182.57 205.72l.27-8.94 2.53.08-.27 8.94-2.53-.08zM194.49 202.25v-.41c0-.14-.02-.27-.03-.38v-.11l2.51.08-.13 4.39c0 .23-.11.34-.32.34l-6.73-.2c-.66-.02-1.23-.12-1.69-.3-.46-.18-.83-.43-1.11-.75-.28-.32-.48-.69-.59-1.14a4.89 4.89 0 01-.15-1.47l.06-1.84c.02-.54.1-1.03.24-1.46.14-.43.36-.8.66-1.1.3-.3.68-.52 1.15-.68.47-.15 1.04-.22 1.7-.2l6.69.2c.24 0 .35.13.35.38l-.06 1.93-2.37.79h-.1l.03-.86c0-.08-.03-.12-.11-.13l-4.27-.13c-.25 0-.45 0-.62.05a.85.85 0 00-.42.22c-.11.11-.19.25-.25.44-.05.18-.09.41-.1.68l-.05 1.57c-.02.54.07.92.27 1.14.2.22.54.34 1.02.35l4.24.13c.09 0 .14-.04.14-.14l.04-1.36zM202.31 197.37c.19 0 .32.04.4.1.08.06.14.15.21.28l3.2 6.53c.05.1.13.15.23.15h.13c.13 0 .2-.05.2-.19l.2-6.73 2.3.07-.26 8.59c0 .24-.12.35-.35.34l-3.64-.11c-.17 0-.3-.03-.38-.09a.716.716 0 01-.23-.29L201 199.5c-.05-.1-.12-.15-.23-.15h-.12c-.13 0-.2.06-.2.19l-.2 6.72-2.3-.07.26-8.58c0-.25.12-.36.35-.36l3.76.11z"></path>
          </g>
          <circle
            cx="269.05"
            cy="195.53"
            r="155.02"
            fill="#fef3c7"
            transform="rotate(-45 269.053 195.535)"
          ></circle>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_29)"
            d="M155.1 185.61c-3.81-6.56-10.55-9.26-10.55-9.26l-2.35 1.1 5.29 9.6c-.71 3.69-3.24 5.72-3.24 5.72v-.02s-3.19.64-6.47-1.19l-3.97-10.22-2.35 1.1s-2.25 6.9.33 14.04c0 0 1 2.31 1.18 2.52.93 1.09 3.36 2.34 8.06 2.05l16.2 30.91c-1.35 2.32-1.58 5.23-.36 7.83a8.47 8.47 0 0011.26 4.09 8.47 8.47 0 004.09-11.26 8.43 8.43 0 00-6.24-4.75l-13.31-32.25c3.17-3.34 3.84-5.97 3.6-7.49-.05-.32-1.18-2.52-1.18-2.52zm13.33 53.31l-4.29 2.01-3.88-2.71.41-4.72 4.29-2.01 3.88 2.71-.41 4.72z"
          ></path>
          <path
            fill="url(#linear-gradient)"
            d="M156.27 188.13c-3.81-6.56-10.55-9.26-10.55-9.26l-2.35 1.1 5.29 9.6c-.71 3.69-3.24 5.72-3.24 5.72v-.02s-3.19.64-6.47-1.19l-3.97-10.22-2.35 1.1s-2.25 6.9.33 14.04c0 0 3.66 4.91 9.23 4.57l16.2 30.91c-1.35 2.32-1.58 5.23-.36 7.83a8.47 8.47 0 0011.26 4.09 8.47 8.47 0 004.09-11.26 8.43 8.43 0 00-6.24-4.75l-13.31-32.25c3.84-4.05 2.42-10.01 2.42-10.01zm13.33 53.31l-4.29 2.01-3.88-2.71.41-4.72 4.29-2.01 3.88 2.71-.41 4.72z"
          ></path>
          <path
            fill="#e5e2ff"
            d="M131.92 181.76H134.51V184.54H131.92z"
            transform="rotate(-25.04 133.243 183.161)"
          ></path>
          <path
            fill="#e5e2ff"
            d="M142.66 176.76H145.25V179.54H142.66z"
            transform="rotate(-25.04 143.99 178.176)"
          ></path>
          <path
            fill="#e5e2ff"
            d="M164.5 239.79H169.24V242.57H164.5z"
            transform="rotate(-25.04 166.9 241.196)"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_28)"
            d="M145.66 205.86l13.09 25.15c3.44.16 5.28-2.47 5.28-2.47l-10.65-26.29c-4.78-.18-7.72 3.61-7.72 3.61zm17.36 22.89c-.38.33-.96.77-1.69 1.11a6.5 6.5 0 01-1.81.54l-13.11-24.63c.64-.57 1.74-1.41 3.15-2.07 1.06-.49 2.14-.81 3.24-.96l10.22 26.01z"
          ></path>
          <path
            fill="#e5e2ff"
            d="M163.02 228.75l1.01-.21s-1.5 2.66-5.28 2.47l.77-.61s1.86-.22 3.5-1.65z"
          ></path>
          <path
            d="M145.66 205.86l.75-.1s2.24-2.32 6.39-3.02l.57-.48s-1.67-.29-4.27.92c-2.6 1.21-3.45 2.68-3.45 2.68z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_27)"
            opacity="0.62"
          ></path>
          <path
            d="M142.19 203.56s6.29-1.12 11.66-5.43l1.7 4.12s-1.93-1.91-6.17-.18c-4.95 2.02-4.68 6-4.68 6l-2.51-4.52z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_94)"
            opacity="0.62"
          ></path>
          <path
            d="M155.55 202.26c-1.21-.87-2.59-.89-2.59-.89l12.67 30.6 1.53-1.58-11.6-28.12z"
            style={{ mixBlendMode: 'screen' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_95)"
            opacity="0.5"
          ></path>
          <path fill="#fff" d="M155.55 202.26s-1.33 4.09 2.49 6.03l-2.49-6.03z"></path>
          <path
            fill="url(#linear-gradient-2)"
            d="M346.23 400h-47c-4.92-27.32-16.36-62.87-16.36-62.87-2.78-1.65-8.21.38-8.21.38L257.48 400h-42.94c-2.28-38.56 18.82-82.33 18.82-82.33-.07-.16-.74-1.5-.56-2.4.07-.39.79-1.13 1.6-1.86 1.16-1.06 2.54-2.12 2.54-2.12l80.11-.5s.81.41 1.84 1.03h.01c1.75 1.06 4.12 2.7 4.12 3.9 0 1.65-.65 2.72-.81 2.96l-.04.05c17.18 32.42 24.07 81.27 24.07 81.27z"
          ></path>
          <ellipse
            cx="236.86"
            cy="367.92"
            rx="46.31"
            ry="17.92"
            transform="rotate(-77.01 236.847 367.914)"
            style={{ mixBlendMode: 'screen' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_83)"
            opacity="0.5"
          ></ellipse>
          <ellipse
            cx="320.06"
            cy="367.47"
            rx="17.92"
            ry="46.31"
            transform="rotate(-15.65 320.152 367.544)"
            style={{ mixBlendMode: 'screen' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_83-2)"
            opacity="0.5"
          ></ellipse>
          <path
            fill="url(#linear-gradient-3)"
            d="M251.92 400.04l-.49-.08c5.47-32.2 19.34-59.2 19.48-59.47l.06-.07 3.53-3.09.33.38-3.5 3.06c-.62 1.22-14.06 27.76-19.41 59.29z"
          ></path>
          <path
            fill="url(#linear-gradient-4)"
            d="M305.61 400.04c-5.36-31.55-19.16-58.35-19.78-59.54l-3.13-2.81.33-.37 3.22 2.91c.14.27 14.38 27.53 19.85 59.73l-.49.08z"
          ></path>
          <path
            d="M323.01 315.72c0 1.65-.65 2.72-.81 2.96l-.04.05c-16.68 3.77-29.37 19.34-29.37 19.34 9.09 17.44 24.25 61.93 24.25 61.93h-17.81c-4.92-27.32-16.36-62.87-16.36-62.87-2.78-1.65-8.21.38-8.21.38L257.48 400h-11.12c3.98-26.18 15.73-58.14 15.73-58.14-11.55-13.45-28.73-24.19-28.73-24.19l-2.04-1.29 1.48-1.11c7.43 7.13 31.39 16.44 32.13 16.73l-30.53-18.59c1.16-1.06 2.54-2.12 2.54-2.12l80.11-.5s.81.41 1.84 1.03l-21.88 12.04 26.01-8.14z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70)"
            opacity="0.76"
          ></path>
          <path
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-2)"
            d="M282.87 337.13L292.22 331.06 290 337.13 288.37 355.4 282.87 337.13z"
            opacity="0.76"
          ></path>
          <path
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-3)"
            d="M274.66 337.51L264.92 332 244.07 322.61 270.62 340.16 272.2 346.45 274.66 337.51z"
            opacity="0.76"
          ></path>
          <path
            fill="#fe9083"
            d="M301.46 149.65c.06.43.11.66.11.66-.49 2.04-1.05 3.93-1.66 5.66-1.96 5.63-4.4 9.63-6.23 12.12-1.59 2.15-2.72 3.18-2.72 3.18-14.59-4.58-21.78-18.85-24.54-25.95-.02-.03-.03-.07-.04-.11-.53-1.34-.88-2.42-1.1-3.12-.17-.57-.25-.88-.25-.88.06-.12.12-.25.18-.37l.03-.05c.24-.5.48-1.01.7-1.5 1.91-4.18 3.18-8.09 4-11.17a60.36 60.36 0 001.27-5.71c.09-.55.13-.85.13-.85l6.8 3.59 23.43 12.4c-.35 2.15-.49 4.17-.5 5.94-.02 1.25.02 2.37.09 3.32.07 1.16.19 2.08.28 2.68 0 .07.01.11.02.16z"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_354)"
            d="M294.96 172.84a20.1 20.1 0 01-4.84 3.54c-.04.03-.08.05-.12.07 0 0-.05-.03-.14-.08-.51-.32-2.25-1.39-4.59-3.15-6.12-4.61-16.34-13.93-19.26-26.49-.01-.02-.01-.03-.02-.05-.34-1.49-.58-3.01-.7-4.59-.03-.42-.06-.83-.07-1.25 0 0 2.03 4.77 5.55 9.92 4.14 6.06 10.35 12.67 17.77 12.71 6.42.04 9.71-4.35 11.38-8.4.71-1.72 1.13-3.37 1.35-4.6.01-.01.01-.02.01-.02.07-.36.12-.68.17-.95.02-.15.04-.27.05-.38.06-.45.08-.71.08-.71s2.46 15.36-6.61 24.43z"
          ></path>
          <path
            d="M294.96 172.84a20.1 20.1 0 01-4.84 3.54h-.26v-.02c-.51-.31-2.25-1.38-4.59-3.14-6.12-4.61-16.34-13.93-19.26-26.49-.01-.02-.01-.03-.02-.05-.34-1.49-.58-3.01-.7-4.59-.03-.42-.06-.83-.07-1.25 0 0 2.03 4.77 5.55 9.92 0 0 4.04 11.1 12.78 16.6 4.38 2.75 7.7 2.35 10.14.73 2.44-1.61 4.02-4.42 4.95-6.54.93-2.13 1.23-4.12 1.28-5.58.01-.33.01-.63 0-.9.71-1.72 1.13-3.37 1.35-4.6.01-.01.01-.02.01-.02.07-.36.12-.68.17-.95.02-.15.04-.27.05-.38.06-.45.08-.71.08-.71s2.46 15.36-6.61 24.43z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-4)"
            opacity="0.5"
          ></path>
          <path
            fill="url(#linear-gradient-5)"
            d="M351.12 263.53c-.11.05-.16.08-.16.08-.82.1-3.37-.46-6.71-3.35h-.01s-.01-.03-.03-.04c0-.01-.02-.03-.04-.04-2.8-2.45-6.16-6.54-9.51-13.24-6.7-13.39-8.62-22.33-8.93-23.89l-.04-.24-3.91 6.2c-2.65 7.97-7.67 40.95-7.58 42.37s4.45 8.34 4.36 9.19c0 0 0 .01-.01.02-.12.86-2.08 2.75-2.64 4.81-.38 1.37 2.28 5.69 4.15 8.92.97 1.69 1.72 3.07 1.72 3.59 0 1.51-4.74 8.9-4.74 8.9v3.98l-.07.07-.22.2-.18.15c-1.8 1.42-9.43 6.07-33.27 7.35-28.25 1.51-47.07-7.58-47.07-7.58l1.42-3.89s-1.32-1.13-1.42-1.7c-.09-.57 1.04-1.9 1.04-1.9s-2.84-1.51-2.84-3.41 5.69-7.76 5.5-12.79c-.19-5.02-4.55-9.47-5.12-12.31s7.39-9.85 7.39-9.85c-6.82-21.6-8.15-50.59-8.15-50.59l-1.32-1.52s-8.15 18.57-15.54 27.66a63.65 63.65 0 01-2.77 3.18 80.976 80.976 0 01-6.36 6.15c-5.12 4.46-9.77 7.39-10.95 7.16-1.9-.38-9.48-15.35-9.13-30.7.16-7.3 4.56-15.47 9.13-22.02.49-.7.98-1.39 1.48-2.06 3.24-4.41 6.35-7.87 7.84-9.45.58-.62.91-.95.91-.95s-1.04-3.35-1.75-6.26c-.01-.07-.03-.14-.05-.21 0-.03-.01-.07-.02-.1a.313.313 0 00-.02-.07c-.42-1.79-.68-3.34-.44-3.72.63-1.01 4.3-2.15 4.93-2.9.63-.76 3.28-13.52 5.3-14.91 1.94-1.33 5.35-2.3 16.72-6.77.56-.22 1.13-.44 1.73-.68 12.75-5.05 25.26-11.18 25.26-11.18l4.8-5.9h2.14l-.7 1.5-.03.05c.34 1.52.73 2.98 1.17 4.37.01.04.02.08.04.11 6.6 20.82 23.58 27.53 23.58 27.53 11.8-8.71 11.57-22.54 11.57-22.54v-1.9l2.21.66 1.51 3.6s2.56 3.98 12.7 8.44c1.75.77 3.63 1.74 5.57 2.85 9.28 5.27 19.6 13.42 20.39 15.15.08.18.17.46.27.86 1.09 4.29 3.33 20.32 5.41 26.04 1.3 3.57 3.35 5.54 4.86 6.56l.02.01c1.12.77 1.94 1.01 1.94 1.01.16.88.31 1.75.45 2.61 4.35 27.42-3.92 46.03-5.78 47.33z"
          ></path>
          <path
            d="M242.29 211.77l-8.24 2.77-1.32-1.52s-8.15 18.57-15.54 27.66a63.65 63.65 0 01-2.77 3.18 80.976 80.976 0 01-6.36 6.15l-6.28-27.07-3.19-20.55c3.24-4.41 6.35-7.87 7.84-9.45.58-.62.91-.95.91-.95s-1.04-3.35-1.75-6.26c-.01-.07-.03-.14-.05-.21 0-.03-.01-.07-.02-.1a.313.313 0 00-.02-.07c-.42-1.79-.68-3.34-.44-3.72.63-1.01 4.3-2.15 4.93-2.9.63-.76 3.28-13.52 5.3-14.91 0 0-1.32 12.25 5.69 27.79l3.41 4.8 9.98 8.02s3.79 5.03 7.92 7.34z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-5)"
            opacity="0.5"
          ></path>
          <path
            fill="url(#linear-gradient-6)"
            d="M218.45 233.93c-1.77 13.13-21.34 23.24-21.34 23.24-4.36 0-9.23-7.58-13.65-16.93s-4.69-36.21-4.92-37.87c-.24-1.66-2.7-4.98-2.85-6.4-.14-1.42 3.98-4.36 3.98-4.36l-.03-.07-.03-.07c-.43-.92-2.85-6.11-2.68-7.06.19-1.04 4.82-3.31 4.82-3.31l.29 5.11s10.78-2.04 14.43-10.39l.64-2.56 1.8 1.2v10.99s.37 1.71.94 1.71 4.77-2.1 5.65-1.81c.89.29 1.76 6.17 2.94 6.92 1.17.76 4.3 2.94 4.77 3.98.21.47.23 2.16.25 4.15.03 2.44.05 5.32.41 6.94.67 2.93 6.35 13.45 4.58 26.59z"
          ></path>
          <path
            fill="url(#linear-gradient-7)"
            d="M397.44 222.68c-.88 1.39-5.3 4.3-6.44 5.44-1.14 1.13 0 4.87 0 4.87-18.57 19.71-37.93 29.58-39.88 30.54-.11.05-.16.08-.16.08-11.66-7.84-10.66-20.75-6.79-31.63 3.7-10.44 10.04-19.01 10.32-19.38h.01s0-.01.01-.02c.21-.08 3.54-1.46 5.92-1.64.79-.06 1.51.25 2.19.68 1.42.88 2.62 2.27 3.78 1.69 1.71-.86 5.53-9.89 8.12-10.14 1.81-.17 4.32 1.67 5.99 2.72.73.46 1.3.77 1.58.69.95-.25 4.17-4.11 4.43-4.21.25-.11 1.72.97 1.72.97l-1.03 1.28c1.58 9.1 6.76 15.22 6.76 15.22l3.47-5.08s.89 6.53 0 7.92z"
          ></path>
          <path
            fill="#cb4d7a"
            d="M301.51 149.26c-.02.13-.04.26-.05.39-.05.27-.11.53-.19.8 0 0 0 .01-.01.02-1.19 4.41-6 8.92-12.07 6.75-6.63-2.37-19.25-29.1-19.25-29.1l1.27-5.71 29.95 24.4.33 2.31.02.14z"
          ></path>
          <path
            fill="#ee8183"
            d="M201.78 144.37s-1.83-10.11-1.01-17.56c.82-7.45-.21-15.92-.21-15.92s-1.81-.76-3.14 0-4.42 8.46-3.03 14.65c1.39 6.19.32 21.03.32 21.03h-2.08l-4.55-6.25-2.21-.63s-12.73 12-12.54 19.14l1.66 6.35 15.67-.54 10.23-11.68.88-8.59z"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_71)"
            d="M185.86 139.69s.33 7.96 2.11 14.78c0 0-.3 2.79-3.57 2.98l-.81-.9s-.57 3.17-3.46 3.41l-2.75-2.75.71 2.27s-.99 2.42-3.6 2.32c0 0-4.36-3.41-4.64-7.86l4.31-3.65v-2.79l5.12-3.6.09-2.04s3-2.23 6.47-2.18z"
          ></path>
          <path
            d="M200.95 124.67s-.77 1.95-1.86 2.71-4.25 1.34-4.25 1.34l-.14 17.86h-2.08l-4.55-6.25s2.31 3.57 2.45 6.25l-1.8.88-1.56-5.35-.74 3.85.74 4.79s2.7-2.32 7.58-2.41l.73 1.33s-8.83 7.31-10.86 11.62c0 0 4.36-5.54 14.31-11.65l.95-2.94 1.26-7.01s-1.19-10.1-.16-15.02z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_48)"
            opacity="0.6"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_71-2)"
            d="M208.35 155.8c-.82 2.46-9.41 12.69-10.36 14.91-.95 2.21-1.52 5.11-1.52 5.11-4.22 9.13-14.43 10.39-14.43 10.39l-.47-8.24s-5.49-3.16-6.42-4.89v-.03l-.12-.29c-.28-1.61-.04-7.58-.04-7.58l9.61-3.89c4.17-5.4 14.31-11.65 14.31-11.65l.47-2.83c-7.28-3.58-6.06-14.41-4.83-15.74 1.23-1.32 3.5-1.32 3.5-1.32s2.66 8.71 4.36 12.79c1.71 4.07 6.76 10.8 5.94 13.26z"
          ></path>
          <path
            fill="#e28183"
            d="M179.39 141.87s1.07 9.95 4.22 14.68c0 0-3.99-4.96-4.31-12.65l.09-2.04zM174.18 147.51s1.04 8.01 5.97 12.46c0 0-4.36-2.18-5.97-9.66v-2.79z"
          ></path>
          <path
            d="M199.32 168.59s-10.83 10.52-17.75 9.38l.47 8.24s11.37-.99 15.07-12.95c0 0 1.33-3.44 2.22-4.67z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_73)"
            opacity="0.91"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_71-3)"
            d="M428.36 182.89s-9.95 18.19-21.6 23.78h-3.98l-9.19 13.93s-5.94-3.73-6.38-15.98c0 0 2.08-2.17 2.59-4.62 0 0-3.28-2.58-4.17-4.47-.88-1.9-1.2-7.58-1.83-9.92s-6-7.2-7.2-7.83-6.63-.95-6.63-.95-.76-1.96 0-2.9c.76-.95 9.22-4.24 13.83-1.08 0 0 .32 2.4.82 3.67.51 1.26 4.55 5.74 5.18 5.74s3.35-2.27 4.55-4.04c1.15-1.7 7.26-14.87 8.74-19.32.01-.05.02-.09.04-.13.02-.07.05-.14.06-.2.02-.05.03-.09.04-.13.01-.02.02-.03.02-.05 1.14-3.85 7.77-11.24 11.31-13.26 0 0 1.51-.38 2.33 1.51 0 0-2.84 8.09-5.81 12.89-.5.81-1.04 1.76-1.6 2.78h-.01c-2.53 4.65-5.38 10.74-5.79 11.63l-.05.11 1.58.81 4.27-4.05 4.38-4.15 10.05 10.61-.99 1.26-3.14 4.03 1.59.29 3.7-4.09 3.29 4.13z"
          ></path>
          <path
            d="M426.03 186.76l-3.18 4.67s-17.45-13.46-21.24-14.6-5.18-.38-5.18-.38l-3.91 4.99s7.2 6.38 7.83 14.97c0 0-2.4-10.86-10.55-14.15.63 0 3.35-2.27 4.55-4.04 1.15-1.7 7.26-14.87 8.74-19.32-.2.76-.46 2.24.16 3.41.86 1.59 5.92.09 6.22 0h.01l-5.8 11.63-.05.11 1.58.81 4.27-4.05-2.14 4.97 15.58 2.75-3.14 4.03 1.59.29 4.66 3.91z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_48-2)"
            opacity="0.6"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_64)"
            d="M413.86 166.66s3.03-.44 4.99 3.47l-.44 1.26s2.95.58 5.81 5.37c0 0-2.53 4.61-8.78 6.69 0 0-2.91-.82-3.41-3.28l.57-1.58-2.27 1.71s-2.72.82-3.92-3.22l7.45-10.42z"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_64-2)"
            d="M429.27 181.63s.63-2.91-2.46-4.8l-6 6.63s.18 2.13 2.78 2.59c0 0 4.11-1.39 5.68-4.42z"
          ></path>
          <path
            d="M385.63 195.53s6.95 7.76 17.15 11.14l-4.4 6.66-9.17-11.65.59-1.68s-3.67-2.76-4.17-4.47z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_73-2)"
            opacity="0.91"
          ></path>
          <path
            fill="#e28183"
            d="M418.41 171.4s-2.91 4.8-5.81 7.2l-.57 1.58s5.64-3.81 7.71-8.2c0 0-.67-.48-1.34-.58z"
          ></path>
          <path
            d="M397.44 222.68c-.88 1.39-5.3 4.3-6.44 5.44-1.14 1.13 0 4.87 0 4.87-18.57 19.71-37.93 29.58-39.88 30.54-.11.05-.16.08-.16.08-1.52.19-8.91-1.89-16.3-16.67-6.7-13.39-8.62-22.33-8.93-23.89l-.04-.24 1.63-2.21 2.42-27.28 1.7 5.49c6.44-7.77 12.51-19.7 12.51-19.7l.27.86c1.09 4.29 3.33 20.32 5.41 26.04 1.3 3.57 3.35 5.54 4.86 6.56v.03c-5.93 5.41-8.87 13.19-10.32 19.38-1.33 5.68-1.42 10.03-1.42 10.03s1.64-7.7 6.82-16.96c1.88-3.37 4.62-6.38 7.33-8.85 2.04-1.86 4.07-3.42 5.72-4.58 1.42.88 2.62 2.27 3.78 1.69-7.8 11.71-7.61 34.89-.28 30.47 7.32-4.42 9-13.8 9-13.8-1.73-11.43-1.21-24.32.18-26.77 1.69.06 6.52 3.45 6.8 3.37-.44 13.45 5.88 22.43 5.88 22.43l4.17-6.45c-6.07-10.23-5.62-20.19-5.62-20.19.25-.11 1.72.97 1.72.97l-1.03 1.28c1.58 9.1 6.76 15.22 6.76 15.22l3.47-5.08s.89 6.53 0 7.92z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#linear-gradient-8)"
            opacity="0.5"
          ></path>
          <path
            d="M317.04 306.81v3.98l-.07.07-.22.2-.18.15c-1.8 1.42-9.43 6.07-33.27 7.35-28.25 1.51-47.07-7.58-47.07-7.58l1.42-3.89s-1.32-1.13-1.42-1.7c-.09-.57 1.04-1.9 1.04-1.9s-2.84-1.51-2.84-3.41c0-1.71 4.64-6.66 5.39-11.31.09-.5.13-.99.11-1.48-.19-5-4.51-9.43-5.11-12.27v-.04c-.57-2.84 7.39-9.85 7.39-9.85-6.82-21.6-8.15-50.59-8.15-50.59l-1.32-1.52s-8.15 18.57-15.54 27.66c-7.39 9.1-18.19 16.87-20.08 16.49-4.36 0-9.23-7.58-13.65-16.93s-4.69-36.21-4.92-37.87c-.24-1.66-2.7-4.98-2.85-6.4 4.74 8.15 12.29 5.75 12.29 5.75-5.47.12-8.31-10.11-8.31-10.11l-.03-.07-.03-.07-2.67-7.05c.3.34 6.55 7.33 12.59 3.02 6.19-4.42 9.38-12.98 9.38-12.98v10.99s.37 1.71.94 1.71c-.37 5.06-1.44 11.22-2.74 17.29-2.81 13.13-6.66 25.81-6.66 25.81s10.44-5.68 14.11-20.08c1.75-6.89 2.04-12.88 1.87-17.24-.15-3.73-.64-6.28-.84-7.21-.01-.07-.03-.14-.05-.21 0-.03-.01-.07-.02-.1 0-.02-.01-.04-.01-.05l1.01 2.14 1.92 4.76c2.23 18.48-2.37 46.33-2.37 46.33 6.7-8.34 8.09-26.78 7.8-31.26-.13-2.14-.3-4.78-.41-6.94-.15-2.36-.25-4.15-.25-4.15l13.71 8.18-2.53-8.02 9.98 8.02s8.97 10.8 18.19 12.06c9.22 1.27 43.07.51 43.07.51s-29.43 1.89-38.02 4.42-10.23 5.43-10.23 5.43c6.21 31.59 40.58 42.24 41.65 42.56-31.18-4.68-45.69-31.19-45.69-31.19s-.51 14.91 1.89 20.59 16.55 19.58 34.74 22.48c1.53.24 3.04.39 4.53.46 15.34.72 28.04-7.12 29.34-7.96.07-.05.11-.07.11-.07s-.01.02-.03.05c-.49.75-6.78 9.59-32.18 10.56-1.54.06-3.04.05-4.5-.01h-.02c-23.54-.99-35.53-16.67-35.53-16.67s-8.71 4.68-3.15 11.62c.06.07.12.15.18.22 1.64 1.89 5.25 4.2 9.52 6.58.12.07.24.14.35.2 5.16 2.85 11.21 5.79 15.89 8.22.03.01.05.02.07.03 2.86 1.49 5.21 2.77 6.52 3.73.01 0 .01.01.01.01 1.32.96 1.59 1.58.3 1.73-6.57.76-31.45-4.67-32.46-3.16-1.01 1.52 1.23 5.43 1.23 5.43 22.84 11.32 71.71 5.74 73.25 5.57-40.9 10.47-74.36-2.79-74.36-2.79l1.11 3.92s18.22 6.31 39.69 6.82c21.48.5 34.87-4.99 34.87-4.99l2.33-3.98z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#linear-gradient-9)"
            opacity="0.5"
          ></path>
          <path
            d="M300.31 216.87s16.27.88 27.02 3.73l-5.54 8.41s-8.34-7.34-21.47-12.14z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4)"
            opacity="0.5"
          ></path>
          <path
            d="M315.51 261.71s-10.15 8.47-20.13 12.38c-9.98 3.92-19.58 4.29-19.58 4.29s5.74 1.71 19.85-.57c14.12-2.27 18.95-9.92 18.95-9.92l.91-6.19z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-2)"
            opacity="0.5"
          ></path>
          <path
            d="M320.06 294.32c-18.78 4.86-42.62-2.1-42.42-2.95s6.53.38 21.21-2.56c14.23-2.85 19.39-7.91 19.7-8.22-.12.86-2.08 2.75-2.64 4.81-.38 1.37 2.28 5.69 4.15 8.92z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-3)"
            opacity="0.5"
          ></path>
          <path
            d="M269.05 219.42c-16.04 1.63-20.36 6.1-20.36 6.1-4.51.57-14.64-10.98-14.64-10.98l-1.32-1.52s-8.15 18.57-15.54 27.66a63.65 63.65 0 01-2.77 3.18l1.05-2.36s1.72-.82 2.22-9.85c.51-9.02-3.79-22.48-3.82-24.31s-.66-11.09-.66-11.09l13.71 8.18-2.53-8.02 9.98 8.02s3.91 5.88 13.78 10.78c9.31 4.63 19.75 4.26 20.9 4.21z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-4)"
            opacity="0.5"
          ></path>
          <path
            d="M232.73 213.02l9.56-1.25s3.82 2.53 11.49 5.65l-6.39 9.43s2.54 13.44 9.82 21.01c0 0-19.32-10.73-22.04-19.75l-2.43-15.09z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-5)"
            opacity="0.5"
          ></path>
          <path
            d="M176.94 184.42l2.73 7.19s2.78 9.7 8.31 10.11c5.53.41 10.93-16.27 10.93-16.27v-10.99s-5.88 12.6-12.23 14.02c-6.35 1.42-9.74-4.06-9.74-4.06z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-6)"
            opacity="0.5"
          ></path>
          <path
            d="M209.99 178.73s4.93 9.85 10.99 12.88c0 0-7.21-17.5-5.69-27.79 0 0-2.65 1.65-5.3 14.91z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-7)"
            opacity="0.5"
          ></path>
          <path
            d="M329.74 193.32l1.7 5.49 1.72 45.05s-4.37-8.57-7.43-20.81l1.59-2.45s2.67-16.98 2.42-27.28z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-6)"
            opacity="0.76"
          ></path>
          <path
            d="M382.09 206.58s-.96 22.13 8.44 24.04l.47 2.37s-12.17-.45-8.91-26.41z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-7)"
            opacity="0.5"
          ></path>
          <path
            d="M366.4 213.31s-.36.79-3.78-1.69c0 0-11.83 8.38-16.39 20.19 0 0 7.29-10.85 11.17-12.02s4.82 3.16 4.82 3.16 1.54-6.1 4.18-9.63z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-8)"
            opacity="0.3"
          ></path>
          <path
            d="M175.69 195.97s4.55 8.39 13.08 5.76c0 0-5.11 3.44-10.23.64 0 0-3.18-5.45-2.85-6.4z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-8)"
            opacity="0.5"
          ></path>
          <path
            d="M205.5 185.35s6.26 23.4-10.07 40.98c0 0 10.6-5.44 13.01-18.04s-2.94-22.93-2.94-22.93z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-9)"
            opacity="0.5"
          ></path>
          <path
            d="M317.64 166.65s-.7 10.56-5.77 18.14c-5.06 7.58-15.1 12.69-15.1 12.69s12.6-4.64 18.38-11.18c5.78-6.54 2.49-19.66 2.49-19.66z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-9)"
            opacity="0.5"
          ></path>
          <path
            d="M253.19 150.76s0 8.83 2.84 17.83c2.84 9 27.51 24.73 27.51 24.73s-25.43-10.56-30.35-20.06 0-22.5 0-22.5z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_4-10)"
            opacity="0.5"
          ></path>
          <path
            fill="url(#linear-gradient-10)"
            d="M252.9 192.82v14.38s33.11-.27 70.24 2.19l.85-12.95s-32.28-3.83-71.08-3.63z"
          ></path>
          <path
            d="M305.29 152.67c-.78 9.3-3.61 15.78-6.63 20.15-4.16 6-8.66 8.05-8.66 8.05-4.5-1.96-8.4-4.4-11.76-7.09-14.26-11.4-18.86-27.2-19.21-28.5 6.02 14.54 14.86 23.35 21.56 28.31 5.4 4.01 9.41 5.52 9.41 5.52v-4.65c-1.07-.4-2.11-.86-3.1-1.36-11.8-5.95-18-18.35-20.9-26.37-.01-.02-.01-.03-.02-.05-1.57-4.34-2.18-7.39-2.18-7.39h2.14l-.7 1.5-.03.05c.34 1.52.73 2.98 1.17 4.37.01.04.02.08.04.11 6.6 20.82 23.58 27.53 23.58 27.53 11.8-8.71 11.57-22.54 11.57-22.54v-1.9l2.21.66 1.51 3.6z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-10)"
            opacity="0.5"
          ></path>
          <path
            d="M375.29 203.21s-3.21 10.48-.18 26.77c0 0 1.52-20.65 2.65-22.45 1.14-1.8 4.32-.95 4.32-.95s-5.01-2.77-6.8-3.37z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-11)"
            opacity="0.3"
          ></path>
          <path
            d="M344.17 260.18c-2.8-2.45-6.16-6.54-9.51-13.24-6.7-13.39-8.62-22.33-8.93-23.89l1.59-2.45 2.13-20.6 1.99-1.19s7.11-7.85 12.51-19.7c.08.18.17.46.27.86 1.09 4.29 3.33 20.32 5.41 26.04 1.3 3.57 3.35 5.54 4.86 6.56 0 0-12.31 18.26-12.91 31.29-.53 11.86 2.11 15.72 2.59 16.32z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-12)"
            opacity="0.5"
          ></path>
          <path
            d="M271.08 298.26s-22.19-3.64-31.25-9.48c0 0-.01 0-.01-.01.09-.5.13-.99.11-1.48-.19-5-4.51-9.43-5.11-12.27.1.27.75 1.77 3.9 4.47 1.99 1.71 5 3.91 9.52 6.58.12.07.24.14.35.2 6.4 3.78 11.91 6.34 15.89 8.22.03.01.05.02.07.03 3.58 1.68 5.9 2.79 6.52 3.73.01 0 .01.01.01.01z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-13)"
            opacity="0.5"
          ></path>
          <path
            d="M318.55 280.59c-.12.86-2.08 2.75-2.64 4.81 0 0-8.14 8.62-38.27 5.97.2-.85 6.53.38 21.21-2.56 14.23-2.85 19.39-7.91 19.7-8.22z"
            style={{ mixBlendMode: 'multiply' }}
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_70-14)"
            opacity="0.5"
          ></path>
          <path
            d="M323.56 163.96l-19.26 6.24-5.64 2.62h-.03l-3.67.02H290l-3.1.26-1.64.12-4.67.37-2.35.19-23.1-8.36-4.13-1.49-19-6.88c.56-.22 1.13-.44 1.73-.68 12.75-5.05 25.26-11.18 25.26-11.18l4.8-5.9h2.14c1.91-4.18 3.18-8.09 4-11.17l1.27-5.71c.09-.55.13-.85.13-.85l6.8 3.59 22.93 18.34c-.02 1.25.02 2.37.09 3.32l.33 2.31c.06-.45.08-.71.08-.71l2.21.66 1.51 3.6s2.56 3.98 12.7 8.44c1.75.77 3.63 1.74 5.57 2.85z"
            style={{ mixBlendMode: 'multiply' }}
            fill="#7a4ac0"
            opacity="0.5"
          ></path>
          <g>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_71-4)"
              d="M308.89 146.39s-8.98 2.02-18.89-2.78-18.24-18.95-18.75-22.48c-.5-3.54 3.79-12.76 3.79-19.96s-3.53-19.58 2.4-26.28c5.94-6.69 33.22-7.7 42.07.89 0 0 2.74 6.88 2.74 10.77 0 .94-.17 2.32-.42 3.91-.08.59-.19 1.22-.29 1.87-.79 4.71-1.88 10.46-1.37 12.98.18.88.46 1.69.79 2.46 1.09 2.53 2.71 4.54 3 6.72.38 2.85-3.44 23.06-15.07 31.9z"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_71-5)"
              d="M274.97 99.14s-2.45-6.15-8.61-6.24c0 0-3.6 1.42-4.17 4.17 0 0 1.33 9.95 2.84 14.59s7.07 3.97 7.07 3.97 4.84-7.4 2.86-16.49z"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_387)"
              d="M298.63 119.39s2.05-.16 2.93.5c.88.66 4.11 3.79 8.18 4.64 4.07.85 6.81-2.62 7.67-2.79.87-.18 1.82 1.05 1.82 1.05s-.37-1.42-2.5-2.06c0 0-.86 3.27-6.76 2.15-5.9-1.12-8.42-3.74-8.42-3.74l-.3-.54s-1.66.35-2.63.79z"
            ></path>
            <path
              d="M289.92 88.8l.08-.63s5.89-10.34 17.54-10.62c11.65-.28 14.28 7.02 14.28 7.02l2.16-3.28-4.92-9.99-34.24-.57-8.34 6.73-1.05 16.47 3.71 21.74 9.02 4.81 2.55-2.26c-.94-7.28-6.35-13.93-6.35-13.93l3.95-2.74s10.14 4.91 15.99 3.44c0 0 4.41-12.86 4.15-22.38 0 0-15.02 2.22-18.53 6.21z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_48-3)"
              opacity="0.6"
            ></path>
            <path
              fill="#38368e"
              d="M289.4 89.56s.57-3.72 6.85-5.21c7-1.66 12.69-3.06 12.69-3.06s-1.24 4.08-3.57 5.61c0 0-7.41-.27-11.15.58-3.75.85-4.81 2.08-4.81 2.08zM321.83 84.57s-3.55 2.74-5.97 9.28c0 0 2.32-3.03 4.45-2.98 1.46.03 1.23 1.48 1.23 1.48s1.45-3.91.29-7.77z"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_59)"
              d="M291.75 100.09s.38-7.86 8.05-9.85c0 0 2.75 3.55 3.03 7.58 0 0-4.07-.76-11.08 2.27z"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_184)"
              d="M313.73 103.22s.62-6.26 4.22-8.57c0 0 2.45 1.84 2.2 7.08 0 0-2.15-.78-6.41 1.5z"
            ></path>
            <path
              fill="#ffebed"
              d="M291.75 100.09s2.49 3.06 9.47 3.66c0 0 1.33-2.02 1.2-5.99 0 0-6.41-.61-10.68 2.32zM313.73 103.22v.92s1.07 2.24 4.93 2.62c0 0 1.24-1.93 1.35-5.07 0 0-2.45-.61-6.27 1.54z"
            ></path>
            <path
              fill="#7f9ec9"
              d="M299.21 97.61s-1.77 2.15-1.61 5.55c0 0 2.32.55 3.62.6 0 0 1.53-2.13 1.2-5.99 0 0-2.03-.44-3.21-.16zM317.38 101.79s-1 1.07-1.19 4.36c0 0 1.37.6 2.46.6 0 0 1.4-1.99 1.35-5.07 0 0-.98-.37-2.62.11z"
            ></path>
            <path
              fill="#38368e"
              d="M298.63 103.39s-.63-4.25 1.8-5.87l1.99.25s.66 3.36-1.2 5.99c0 0-1.98-.22-2.59-.37zM318.26 101.61s-.9 1.89-1.32 4.83c0 0 .69.28 1.71.32 0 0 1.36-1.67 1.35-5.07 0 0-1.04-.28-1.74-.08z"
            ></path>
            <path
              fill="#131163"
              d="M291.75 100.09s4.64-2.7 12.55-1.16l-1.47-1.11s-5.64-1.75-11.08 2.27zM313.73 103.22s3.72-1.98 8.06-.93l-1.79-1.32s-2.91-.45-6.27 2.25z"
            ></path>
            <path
              fill="#fff"
              d="M296.77 100.09s1.26-.28 2.4.87c0 0-1.56.46-2.4-.87zM315.43 103.76s1.98-.38 2.66.52c0 0-1.06.73-2.66-.52z"
            ></path>
            <path
              fill="#c6659c"
              d="M292.21 100.55s3.61 3.57 9.39 4.42l.15-2.1-.53.89s-5.56-.33-9.01-3.2zM313.73 104.14s.64 2.31 5.34 3.35l-.15-1.13-.26.4s-3.34-.43-4.93-2.62z"
            ></path>
            <path
              fill="#cb5f7d"
              d="M304.3 113.36s1.75-.38 4.97 0c3.22.38 6.84 1.26 8.82 0 0 0-2.63 2.63-4.91 3.03s-5.75-1.6-5.75-1.6l-1.52.03s-1.17-.57-1.63-1.46z"
            ></path>
            <path
              fill="#9f4a8b"
              d="M306.15 114.81s.79-.51 1.45-.38c.66.13 1.34 1.09 1.34 1.09s-1.4-.74-2.79-.71z"
            ></path>
            <path
              fill="#ffbcaf"
              d="M318.09 113.36c.84-.82-3.52-8.58-5.6-8.87s-4.04 8.7-4.04 8.7 2.9.41 5.71.78c2.81.38 3.93-.61 3.93-.61z"
            ></path>
            <path
              d="M321.21 88.92c-1.18-.15-5.35 4.92-5.35 4.92s-2.65 8.21-2.13 10.64c.52 2.44 6.96 3.73 6.96 3.73l.27-.43c-.33-.78-.61-1.59-.79-2.47-.51-2.52.58-8.27 1.37-12.98 0 0 .26-.97.29-1.87.03-.76-.08-1.48-.62-1.54z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_48-4)"
              opacity="0.6"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_292)"
              d="M321.02 122.26c-1.33-2.78-.51-4.23-12.06-5.74-16.35-2.15-17.75 2.84-20.53 2.08-.1-.03-.22-.07-.33-.12-3.01-1.17-10.1-8.14-10.28-17.53-.19-9.76 6.35-16.68 6.35-16.68-2.37-1.99-3.32-7.76-.76-10.23 2.56-2.46 6.92-1.89 17.62-.76 10.71 1.14 10.71.48 10.71.48 3.4.87 5.35 4.06 5.9 5.08.11.2.16.32.16.32l1.33-1.23c3.6 5.21 2.94 10.89 2.94 10.89s5.87-11.94 5.2-13.63c-1.22-3.12-4.61-7.67-4.82-7.96h-.01s-.95-9.1-3.79-9.1-14.97 2.74-14.97 2.74c1.33-3.12 1.14-6.72 1.14-6.72l-.05.05c-3.96 3.55-7.83 3.94-13.31 6.48-2.76 1.29-4.06 2.48-5.13 3.72l-.37.44-.39.47c-.38.48-.77.97-1.24 1.47-.02.03-.05.05-.06.06l-.03.03c-.44.48-.96.97-1.59 1.49-3.6 2.93-11.52 4.89-12.47 7.99-.95 3.09 1.2 7.32 2.34 11.68 1.13 4.36.61 8.21.61 8.21s3.77 4.86 2.52 11.97c-1.11 6.37-3.54 7.41-3.54 7.41-1.71 3.51-.9 6.79-.9 6.79 3.5 13.92 17.98 22.21 17.98 22.21 12.88 4.8 21.35 2.71 21.35 2.71 9.37-6.12 12.58-26.34 12.72-27.28-.16.25-1.9 2.95-2.25 2.21zm-5.78 12.89c-2.27-.38-2.75-6.13-3.5-6.89-.76-.75-4.87-.44-4.87-.44s-3.79 4.3-5.3 4.42c-1.52.13-9.6-3.16-7.85-8.08 1.74-4.93 7.85-5.56 7.85-5.56s3.16 2.65 7.89 2.96c4.74.31 6.45-.56 7.01-.81.57-.26 3.62 1.13 3.54 5.43-.05 2.99-2.49 9.35-4.77 8.97z"
            ></path>
            <path
              fill="#d2726c"
              d="M314.65 106.21s4.08 5.07 3.69 6.98c-.43 2.09-5.16 3.2-5.16 3.2s3.79-1.31 4.57-3.2c0 0-.97-3.84-3.11-6.98z"
            ></path>
            <path
              d="M322.07 88.82s.66-5.68-2.94-10.89c2.89-5.16 3.31-10.71 3.31-10.71h.01c.98 2.42 1.54 7.11 1.54 7.11l3.28.86c.67 1.69-5.2 13.63-5.2 13.63z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_35)"
              opacity="0.6"
            ></path>
            <path
              d="M317.64 78.84c-.55-1.02-2.5-4.21-5.9-5.08 0 0 0 .66-10.71-.48-10.7-1.13-15.06-1.7-17.62.76-2.56 2.47-1.61 8.24.76 10.23 0 0-6.54 6.92-6.35 16.68.18 9.39 7.27 16.36 10.28 17.53l-.14 1.04s.53 21.5 5.76 23.21c5.22 1.7 16.06.82 17.07 1.83s-.14 2.61-.24 2.76-8.47 2.1-21.35-2.7c0 0-14.48-8.29-17.98-22.21 0 0-.81-3.28.9-6.79 0 0 2.43-1.04 3.54-7.41 1.25-7.11-2.52-11.97-2.52-11.97s.52-3.85-.61-8.21c-1.14-4.36-3.29-8.59-2.34-11.68 6.06.95 10.04-2.21 10.04-2.21s1.06-1.47 5.75-2.23 23.54 1.14 23.54 1.14-1.89-1.57-5.87-2.61c-3.76-.99-16.6.16-17.98.27 1.47-.26 16.03-2.76 17.69-2.26 1.76.52 8.06 3.41 8.06 3.41-.57-2.89-6.21-9.85-6.21-9.85s-7.96.14-13.17 1.23c-4.65.97-7.2 3.1-7.7 3.54l1.24-1.47.39-.47.37-.44 1.82-.31 9.14-3.69c3.07-1.64 7-5.7 7.48-6.2l.05-.05s.19 3.6-1.14 6.72c7.72-.95 10.33-.47 10.33-.47 3.51 4.97 3.63 18.44 3.63 18.44z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_52)"
              opacity="0.6"
            ></path>
            <path
              d="M289.19 144.62s4.73-1.12 11.87-.84c7.14.29 11.25.32 9.48 3.55 0 0-8.97 2.03-21.35-2.71z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_397)"
              opacity="0.5"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_141)"
              d="M314.01 60.4s4.34-1.69 6.06-1.42c0 0-.68-.91-1.39-1.1-.71-.19-15 2.98-15 2.98s8.91-1.04 10.33-.47z"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_141-2)"
              d="M305.2 62.01s-.34 4.73-1.85 6.44l-17.69 2.26-5.19-.92s2.01-.86 4.22-3.43c2.21-2.58 13.74-5.11 20.52-4.35z"
            ></path>
            <path
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_141-3)"
              d="M322.44 67.22s1.44 4.65 1.55 7.11l3.28.86s-1-3.52-4.83-7.97z"
            ></path>
            <path
              d="M274.24 107.48s-1.24-5.97-4.29-8.92-6.52-2.01-6.52-2.01.95 11.07 1.94 13.77c.99 2.7 2.51 3.41 2.51 3.41s-2.13-1.87-2.42-5.53-.38-8.82.43-9.44c.81-.62 4.06 1.79 4.06 1.79s-1.03 1.26-1.64 4.52c-.62 3.26 1.66 5.63 2.51 5.58.85-.05-.05-3.77.09-4.85s2.04-.84 3.33 1.67z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_285)"
              opacity="0.8"
            ></path>
            <path
              d="M271.19 100.07s-3.33 2.19-2.97 6.67c.36 4.49 2.92 4.29 2.93 3.35 0-.94-.49-3.37-.23-4.74s2.47-.75 2.47-.75-1.46-3.56-2.21-4.53z"
              style={{ mixBlendMode: 'multiply' }}
              fill="url(#_Áåçûìÿííûé_ãðàäèåíò_285-2)"
              opacity="0.8"
            ></path>
            <path
              fill="#34c7ff"
              d="M323.27 120.05s-4.14 18.87-12.73 27.28c0 0 9.8-3.85 12.73-27.28zM318.68 57.89s2.18 1.7 2.6 7.59c.41 5.9-2.14 12.45-2.14 12.45s3.28-4.9 3.6-10.27c.32-5.37-2.32-9.09-4.05-9.77z"
            ></path>
          </g>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_141-4)"
            d="M292.24 70.24s5.05 1.72 10.59 2.21 6.68.6 6.68.6-2.23-2.16-6.97-2.81c-4.74-.65-10.3 0-10.3 0z"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_141-5)"
            d="M316.64 120.46s2.42 0 3.37 3.03c.76 2.42.97 4.5.97 4.5l.86-3.32s-1.12-4.21-2.28-5.16c-.84-.68-2.28-1.37-2.96-1.21l.05 2.16z"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_141-6)"
            d="M310.13 117.43l.41 3.6s2.94.24 4.89-.57l.35-2.18s-3.75-.95-5.65-.85z"
          ></path>
          <path
            fill="#34c7ff"
            d="M323.56 163.96s17.23 12.58 19.46 16.91c2.24 4.33 3.14 17.9 6.16 23.78 0 0-2.07-9.61-3.52-17.14-1.45-7.53-1.1-7.64-1.91-9.49-.81-1.85-13.67-10.77-20.2-14.06zM320.47 234s-8.3 35.54-7.93 37.94c.38 2.4 5.75 7.3 6 8.64 0 0-4.11 5.5-3.92 6.72s7.2 8.92 7.01 11.31c-.05.69-4.6 8.19-4.6 8.19s5.14-7.37 5.39-8.55c.25-1.18-6.3-11.03-6.49-12.03-.5-2.59 3.27-4.5 3.39-6.2.13-1.71-5.09-5.87-5.14-8.65-.04-2.78 6.27-37.38 6.27-37.38zM322.16 318.73s17.95 40.64 24.07 81.27c0 0-1.02-39.66-24.07-81.27z"
          ></path>
          <path
            fill="#ffbcaf"
            d="M208.35 155.8s-4.64-.99-6.57-5.04c-1.93-4.05-.67-9.92-.67-9.92s3.64 6.98 5.45 9.36c1.81 2.38 2.3 5.1 1.79 5.6z"
          ></path>
          <text
            fill="#fff"
            fontFamily="FiraCode-Bold, 'Fira Code'"
            fontSize="12"
            transform="translate(271.55 205.17)"
          >
            <tspan x="0" y="0">
              CODE
            </tspan>
          </text>
          <AnimatedG delay={500} duration={1000}>
            <g>
              <path
                fill="#36d1f7"
                d="M351.66 134.61l3.22 91.8a6.771 6.771 0 006.76 6.53h158.13c3.67 0 6.67-2.93 6.76-6.6l2.21-92.87a6.77 6.77 0 00-6.81-6.93l-163.56 1.07c-3.81.03-6.85 3.19-6.72 7z"
                opacity="0.6"
              ></path>
              <path
                fill="#744ca2"
                d="M519.77 233.19H361.64c-3.8 0-6.88-2.97-7.01-6.77l-3.22-91.8a6.92 6.92 0 011.95-5.1 6.937 6.937 0 015.02-2.16l163.57-1.07c1.9 0 3.71.73 5.05 2.1a6.951 6.951 0 012.01 5.08l-2.21 92.87a6.972 6.972 0 01-7.01 6.85zm2.21-106.4h-.04l-163.57 1.07c-1.78.01-3.43.72-4.66 2a6.462 6.462 0 00-1.81 4.74l3.22 91.8a6.486 6.486 0 006.51 6.29h158.13c3.51 0 6.43-2.85 6.51-6.36l2.21-92.87c.04-1.78-.62-3.45-1.87-4.72a6.45 6.45 0 00-4.64-1.95z"
              ></path>
              <path
                d="M351.89 139.29h176.66l.28-4.84c.25-4.28-3.17-7.88-7.46-7.85l-163.5 1.29c-3.41.03-6.15 2.84-6.08 6.25l.1 5.15z"
                style={{ mixBlendMode: 'multiply' }}
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_89)"
                opacity="0.6"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_85)"
                d="M360.78 146.7L360.78 199.82 414.85 199.82 414.85 146.42 360.78 146.7z"
                opacity="0.3"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_85-2)"
                d="M467.11 150.26H490.63V173.78H467.11z"
                opacity="0.3"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_85-3)"
                d="M494.86 150.26H518.38V173.78H494.86z"
                opacity="0.3"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_85-4)"
                d="M438.89 150.26H462.40999999999997V173.78H438.89z"
                opacity="0.3"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M458.23 187.5H518.38V193.13H458.23z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M443.19 196.07H518.39V197.81H443.19z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M443.9 176.78H458.28999999999996V178.52H443.9z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M471.68 176.78H486.07V178.52H471.68z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M499.43 176.78H513.82V178.52H499.43z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 198.91H463.08V200.65H438.89z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M443.19 201.71H518.39V203.45000000000002H443.19z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 204.51H518.38V206.25H438.89z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 207.31H518.38V209.05H438.89z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M443.19 218.63H518.39V220.37H443.19z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 221.43H518.38V223.17000000000002H438.89z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 224.23H518.38V225.97H438.89z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 210.11H515.1899999999999V211.85000000000002H438.89z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M443.19 212.91H518.39V214.65H443.19z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M438.89 215.71H503.29999999999995V217.45000000000002H438.89z"
              ></path>
              <path
                fill="#e0ffff"
                d="M375.93 189.17c-8.48 0-15.38-6.9-15.38-15.38s6.9-15.38 15.38-15.38 15.38 6.9 15.38 15.38-6.9 15.38-15.38 15.38zm0-29.77c-7.93 0-14.38 6.45-14.38 14.38s6.45 14.38 14.38 14.38 14.38-6.45 14.38-14.38-6.45-14.38-14.38-14.38z"
              ></path>
              <circle cx="375.93" cy="173.78" r="8.36" fill="#fff"></circle>
              <path
                fill="#e0ffff"
                d="M414.85 161.8c-8.48 0-15.38-6.9-15.38-15.38s6.9-15.38 15.38-15.38 15.38 6.9 15.38 15.38-6.9 15.38-15.38 15.38zm0-29.77c-7.93 0-14.38 6.45-14.38 14.38s6.45 14.38 14.38 14.38 14.38-6.45 14.38-14.38-6.45-14.38-14.38-14.38z"
              ></path>
              <circle
                cx="414.85"
                cy="146.42"
                r="7.87"
                fill="#fff"
                transform="rotate(-81.06 414.84 146.423)"
              ></circle>
              <g style={{ mixBlendMode: 'soft-light' }} fill="#fff">
                <path d="M358.08 132.08L359.21 130.38 365.29 135.7 364.35 137 358.08 132.08z"></path>
                <path d="M365.44 132.08L364.32 130.38 358.24 135.7 359.17 137 365.44 132.08z"></path>
              </g>
              <path fill="#fff" d="M469.84 131.53H524.28V134.26H469.84z"></path>
            </g>
          </AnimatedG>
          <g>
            <path
              fill="url(#linear-gradient-11)"
              d="M183.35 92.12L183.35 115.75 211.61 115.99 211.99 91.37 183.35 92.12z"
            ></path>
            <path
              fill="url(#linear-gradient-12)"
              d="M211.99 91.37L213.83 94.47 212.91 115.96 211.61 115.99 211.99 91.37z"
            ></path>
            <path
              fill="#fff"
              d="M188.4 100.1L191.01 96.31 205.11 108.15 202.95 111.04 188.4 100.1z"
            ></path>
            <path
              fill="#fff"
              d="M205.48 100.1L202.87 96.31 188.76 108.15 190.92 111.04 205.48 100.1z"
            ></path>
          </g>
          <AnimatedG delay={500}>
            <g>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_115)"
                d="M249.27 370.18h-96.69c-4.3 0-7.82-3.44-7.92-7.74l-1.81-79.31c-.1-4.44 3.47-8.1 7.92-8.1h100.67c4.46 0 8.04 3.68 7.92 8.14l-2.17 79.31a7.92 7.92 0 01-7.92 7.7z"
                opacity="0.81"
              ></path>
              <path
                fill="#473da2"
                d="M249.27 370.43h-96.69c-4.4 0-8.07-3.58-8.17-7.98l-1.81-79.31c-.05-2.22.78-4.31 2.33-5.9a8.121 8.121 0 015.84-2.46h100.67c2.22 0 4.3.88 5.85 2.47a8.11 8.11 0 012.31 5.92l-2.18 79.31c-.12 4.46-3.71 7.94-8.17 7.94zm-98.49-95.14c-2.08 0-4.03.82-5.48 2.31a7.592 7.592 0 00-2.18 5.54l1.81 79.31c.09 4.13 3.53 7.49 7.67 7.49h96.69c4.18 0 7.55-3.28 7.67-7.46l2.18-79.31c.06-2.09-.71-4.06-2.17-5.56a7.606 7.606 0 00-5.5-2.32H150.8z"
              ></path>
              <g fill="#fff">
                <path d="M168.92 291.26H219.76999999999998V293.44H168.92z"></path>
                <path d="M168.92 296.55H194.33999999999997V298.73H168.92z"></path>
                <path d="M168.92 300.98H194.33999999999997V303.16H168.92z"></path>
                <path d="M197.2 300.98H217.42999999999998V303.16H197.2z"></path>
                <path d="M168.92 305.4H209.91V307.58H168.92z"></path>
                <path d="M168.92 309.82H183.51V312H168.92z"></path>
                <path d="M186.51 323.08H211.73999999999998V325.26H186.51z"></path>
                <path d="M168.92 314.24H214.64999999999998V316.42H168.92z"></path>
                <path d="M168.92 318.66H204.1V320.84000000000003H168.92z"></path>
                <path d="M168.92 323.08H185.47V325.26H168.92z"></path>
                <path d="M168.92 327.5H194.33999999999997V329.68H168.92z"></path>
                <path d="M168.92 331.92H176.20999999999998V334.1H168.92z"></path>
                <path d="M179.22 331.92H205.68V334.1H179.22z"></path>
                <path d="M186.51 336.21H211.73999999999998V338.39H186.51z"></path>
                <path d="M168.92 336.21H185.47V338.39H168.92z"></path>
                <path d="M168.92 340.63H194.33999999999997V342.81H168.92z"></path>
                <path d="M168.92 345.06H176.20999999999998V347.24H168.92z"></path>
                <path d="M179.22 345.06H205.68V347.24H179.22z"></path>
              </g>
            </g>
          </AnimatedG>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_302)"
            d="M508.72 108.84c0 2.47-2 4.47-4.47 4.47s-4.47-2-4.47-4.47 2-4.47 4.47-4.47 4.47 2 4.47 4.47z"
          ></path>
          <path
            fill="url(#_Áåçûìÿííûé_ãðàäèåíò_302-2)"
            d="M89.82 212.48a5.56 5.56 0 01-11.12 0 5.56 5.56 0 0111.12 0z"
          ></path>
          <circle cx="517.37" cy="108.84" r="4.47" fill="url(#linear-gradient-13)"></circle>
          <circle cx="229.2" cy="139.57" r="3.16" fill="url(#linear-gradient-14)"></circle>
          <circle cx="440.86" cy="279" r="3.16" fill="url(#linear-gradient-15)"></circle>
          <circle cx="112.34" cy="310.51" r="2.82" fill="url(#linear-gradient-16)"></circle>
          <AnimatedG delay={700}>
            <g>
              <path
                fill="url(#linear-gradient-17)"
                d="M160.49 282.77h-48.8c-3.93 0-7.15-3.11-7.28-7.04l-1.08-32.1a7.281 7.281 0 017.28-7.53h50.86c4.11 0 7.41 3.4 7.28 7.51l-.98 32.1a7.282 7.282 0 01-7.28 7.06z"
                opacity="0.73"
              ></path>
              <path
                fill="#953da2"
                d="M160.49 283.02h-48.8a7.51 7.51 0 01-7.53-7.28l-1.08-32.1c-.07-2.06.68-4.01 2.11-5.49a7.486 7.486 0 015.42-2.3h50.86c2.06 0 3.98.81 5.41 2.29a7.457 7.457 0 012.12 5.48l-.98 32.1a7.501 7.501 0 01-7.53 7.3zm-49.88-46.66c-1.92 0-3.72.76-5.06 2.14s-2.04 3.2-1.97 5.13l1.08 32.1c.13 3.81 3.22 6.8 7.03 6.8h48.8c3.82 0 6.91-3 7.03-6.82l.98-32.1c.06-1.92-.64-3.73-1.98-5.11a6.98 6.98 0 00-5.05-2.14h-50.86z"
              ></path>
              <path
                fill="#fff"
                d="M124.7 247.64L112.67 261.59 124.93 271.99 124.93 266.62 117.84 260.48 124.42 253.04 124.7 247.64z"
              ></path>
              <path
                fill="#fff"
                d="M145.85 248.27L157.89 262.21 145.63 272.61 145.63 267.25 152.72 261.11 144.83 252.76 145.85 248.27z"
              ></path>
              <path
                fill="#fff"
                d="M127.33 271.99L137.81 248.89 142.74 248.89 130.86 271.99 127.33 271.99z"
              ></path>
            </g>
          </AnimatedG>
          <AnimatedG delay={700}>
            <g>
              <path
                fill="url(#linear-gradient-18)"
                d="M488.82 348.82h-61.05c-4.91 0-8.94-3.89-9.11-8.8l-1.36-40.15c-.17-5.15 3.95-9.42 9.11-9.42h63.63c5.14 0 9.26 4.25 9.11 9.39l-1.23 40.15a9.108 9.108 0 01-9.11 8.83z"
                opacity="0.73"
              ></path>
              <path
                fill="#953da2"
                d="M488.82 349.07h-61.05c-5.08 0-9.18-3.97-9.36-9.04l-1.36-40.15c-.09-2.56.85-4.98 2.63-6.82a9.284 9.284 0 016.73-2.85h63.63c2.55 0 4.94 1.01 6.72 2.84a9.267 9.267 0 012.64 6.8L498.17 340a9.328 9.328 0 01-9.36 9.08zm-62.4-58.37c-2.42 0-4.69.96-6.37 2.7a8.822 8.822 0 00-2.49 6.46l1.36 40.15c.16 4.8 4.05 8.56 8.86 8.56h61.05c4.82 0 8.71-3.77 8.86-8.59l1.23-40.15c.07-2.42-.81-4.71-2.5-6.44a8.761 8.761 0 00-6.36-2.69h-63.63z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M429.55 296.91H485.46000000000004V330.12H429.55z"
              ></path>
              <path
                fill="#fff"
                d="M452.55 305.15L452.55 321.88 466.84 312.75 452.55 305.15z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#d1d4fb"
                d="M429.55 336.24H485.46000000000004V339.28000000000003H429.55z"
              ></path>
              <path
                fill="#fff"
                d="M429.55 336.24H444.02000000000004V339.28000000000003H429.55z"
              ></path>
            </g>
          </AnimatedG>
          <AnimatedG delay={500}>
            <g fillRule="evenodd">
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_206)"
                d="M388.58 286.42l-2.92 8.35c1.61-4.61 3.93-7.61 2.92-8.35zm-2.92 8.35l-2.92 8.35c.74-.22 1.31-3.73 2.92-8.35zm2.92-8.35l-2.92 8.35c1.61-4.61 3.93-7.61 2.92-8.35zm-2.92 8.35l-2.92 8.35c.74-.22 1.31-3.73 2.92-8.35zm8.42 7.23l2.83 1.61 3.06-8.35-3.28-.55c.06-.31.12-.62.16-.93.24-1.43.32-2.83.28-4.16l3.43-2.15-1.56-7.36-3.29 3.14a9.655 9.655 0 00-1.68-2.45c-.18-.2-.37-.38-.57-.55l2.01-4.64-5.35-1.74-1.28 4.68c-1.2 0-2.41.3-3.62.85l-.59-4.42-5.89 4.46 1.36 3.92a22.31 22.31 0 00-2.87 4.18l-2.84-1.6-3.06 8.35 3.28.55c-.35 1.76-.48 3.47-.43 5.09l-3.43 2.15 1.56 7.36 3.29-3.14c.59 1.2 1.34 2.22 2.25 3l-2.01 4.65 5.26 2.05.81-2.96.55-2.02c1.2 0 2.42-.3 3.63-.84l.58 4.42 5.89-4.46-1.36-3.92c.83-.95 1.61-2.02 2.32-3.2.2-.32.38-.65.56-.99zm-8.42-7.23c-1.62 4.61 0 9.37-2.92 8.35-2.93-1.03-4-5.6-2.38-10.2 1.62-4.61 5.3-7.51 8.22-6.49 2.93 1.02-1.31 3.73-2.92 8.35zm2.92-8.35l-2.92 8.35c1.61-4.61 3.93-7.61 2.92-8.35zm-2.92 8.35l-2.92 8.35c.74-.22 1.31-3.73 2.92-8.35z"
              ></path>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_206-2)"
                d="M396.93 303.6l3.06-8.35-3.12-1.48-.5-.24.33-4.6 3.46-1.69-1.14-7.14-7.55-2.46 1.39 3.31 2.63-5.36-5.35-1.74-2.2-.72-5.27-2.05-.98 3.6-4.59-2.18-5.89 4.46 1.79 4.82-5.51 15.26-2.72 9.91 5.23.57-1.7 3.93 5.27 2.05 7.54 2.46-1.21-2.42-.76-1.45 2.79.91 4.76 1.55 5.89-4.46-3.64-4.29 4.6-2.83 3.39.62zm-16.57-10.69c1.62-4.61 5.3-7.51 8.22-6.49l-2.92 8.35-2.92 8.35c-2.93-1.03-4-5.6-2.38-10.2z"
              ></path>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_107)"
                d="M389.38 301.14l3.06-8.35-3.28-.55c.35-1.76.48-3.47.44-5.08l3.43-2.15-1.56-7.36-3.29 3.14c-.58-1.2-1.34-2.22-2.25-3l2.01-4.64-5.27-2.05-1.36 4.99c-1.19 0-2.42.3-3.62.84l-.58-4.42-5.89 4.45 1.36 3.92a22.393 22.393 0 00-2.87 4.19l-2.84-1.6-3.06 8.35 3.28.55c-.35 1.76-.48 3.47-.44 5.08l-3.43 2.15 1.56 7.36 3.29-3.14c.58 1.2 1.34 2.22 2.25 3l-2.01 4.64 5.27 2.05 1.36-4.99c1.19 0 2.42-.3 3.62-.84l.58 4.42 5.89-4.45-1.36-3.92c1.06-1.21 2.03-2.62 2.87-4.19l2.84 1.6zm-14.19-.49c-2.93-1.03-3.99-5.59-2.38-10.2 1.61-4.61 5.3-7.51 8.23-6.49 2.93 1.03 3.99 5.59 2.38 10.2-1.61 4.61-5.3 7.51-8.23 6.49z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#601734"
                d="M400.57 287.46L393.03 285.01 389.6 287.16 397.14 289.61 400.57 287.46z"
                opacity="0.5"
              ></path>
              <path
                style={{ mixBlendMode: 'soft-light' }}
                fill="#b3d9ff"
                d="M392.58 310.1L385.03 307.64 383.67 303.73 391.22 306.19 392.58 310.1z"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                fill="#601734"
                d="M385.92 277.79L390.06 278.99 391.46 277.65 394.21 278.54 395.48 275.6 387.94 273.15 385.92 277.79z"
                opacity="0.5"
              ></path>
              <path
                d="M374.93 308.53l3.95 1.64-.33-2.49s-2.13 1.12-3.62.84zM375.54 285.9l6.65 3.52s.96-1.29 1.71-1.81c0 0-1.74-7.34-8.37-1.71z"
                style={{ mixBlendMode: 'multiply' }}
                fill="#601734"
                opacity="0.5"
              ></path>
            </g>
          </AnimatedG>
          <path
            fill="#fbbf24"
            d="M222.79 36.96L229.2 49.81 224.92 51.76 218.92 39.96 222.79 36.96z"
          ></path>
          <path
            fill="#6877ff"
            d="M78.34 336.3L84.28 342.82 86.61 340.13 81 333.96 78.34 336.3z"
          ></path>
          <path
            fill="#4f31e0"
            d="M380.11 115.37L374.13 119 371.74 114.45 378.28 110.64 380.11 115.37z"
          ></path>
          <path
            fill="#4f31e0"
            d="M409.56 345.08L400.99 351.17 398.59 346.63 406.91 341.77 409.56 345.08z"
          ></path>
          <AnimatedG delay={400} duration={1500}>
            <g>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_107-2)"
                fillRule="evenodd"
                d="M398.24 84.3L396.79 50.64 440.86 50.64 439.05 84.2 398.24 84.3z"
              ></path>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_206-3)"
                fillRule="evenodd"
                d="M396.79 50.64L395.47 52.62 396.79 84.3 398.24 84.3 396.79 50.64z"
              ></path>
              <path
                fill="#fff"
                d="M411.42 57.36L404.51 56.62 405.45 79.68 411.42 79.1 411.42 76.71 407.96 76.79 407.57 59.01 411.42 59.12 411.42 57.36z"
              ></path>
              <path
                fill="#fff"
                d="M425.59 57.36L432.5 56.62 431.55 79.68 425.59 79.1 425.59 76.71 429.04 76.79 429.44 59.01 425.59 59.12 425.59 57.36z"
              ></path>
            </g>
          </AnimatedG>
          <AnimatedG delay={100} duration={1000}>
            <g>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_107-3)"
                fillRule="evenodd"
                d="M94.35 157.98L95.34 135.03 65.3 135.03 66.53 157.91 94.35 157.98z"
              ></path>
              <path
                fill="url(#_Áåçûìÿííûé_ãðàäèåíò_206-4)"
                fillRule="evenodd"
                d="M95.34 135.03L96.24 136.39 95.34 157.98 94.35 157.98 95.34 135.03z"
              ></path>
              <path
                fill="#fff"
                d="M83.77 139.65s3.29-.13 3.88.14c.58.27-.15 5.64-.15 5.64l1.31 1.21-1.23 1.19s.06 5.44-.71 5.89-3.42 0-3.42 0v-1.36s2.16.14 2.52-.15.32-5.04.32-5.04l.58-.64-.58-.69s.11-3.39.04-4.32c-.04-.62-2.56-.65-2.56-.65v-1.22zM76.22 139.65s-3.29-.13-3.88.14.15 5.64.15 5.64l-1.31 1.21 1.23 1.19s-.06 5.44.71 5.89 3.42 0 3.42 0v-1.36s-2.16.14-2.52-.15-.32-5.04-.32-5.04l-.58-.64.58-.69s-.11-3.39-.04-4.32c.04-.62 2.56-.65 2.56-.65v-1.22z"
              ></path>
            </g>
          </AnimatedG>
          <g fill="#744ca2">
            <path d="M347.86 87.33l-7.36-19.27 19.09 3.99-11.73 15.28zm-6.57-18.59l6.72 17.58 10.7-13.94-17.42-3.64z"></path>
            <path
              d="M398.19 355.71H409.13V356.21H398.19z"
              transform="rotate(-53.76 403.637 355.96)"
            ></path>
            <path d="M339.92 279.16L332.97 270.51 333.36 270.2 340.31 278.85 339.92 279.16z"></path>
            <path d="M125.59 339.88L111.72 329.82 112.01 329.42 125.88 339.48 125.59 339.88z"></path>
            <path
              d="M110.23 334.4H127.36V334.9H110.23z"
              transform="rotate(-52.7 118.8 334.654)"
            ></path>
            <path
              d="M98.59 184.72H99.09V194.86H98.59z"
              transform="rotate(-62.28 98.84 189.798)"
            ></path>
            <path d="M448.05 71.37L447.68 71.04 458.05 59.21 458.42 59.54 448.05 71.37z"></path>
            <path
              d="M248.43 99.55H248.93V109.96H248.43z"
              transform="rotate(-26.45 248.676 104.757)"
            ></path>
            <path
              d="M171.13 261.73H186.67V262.23H171.13z"
              transform="rotate(-39.91 178.917 261.99)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default React.memo(ProgrammingImage)
