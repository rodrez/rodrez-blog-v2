export default function Logo() {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 725 870"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="466"
          x2="176"
          y2="466"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" y1="782" y2="782" xlinkHref="#linear-gradient" />
        <linearGradient
          id="linear-gradient-3"
          y1="434.8"
          x2="725"
          y2="434.8"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="R">
          <circle cx="88" cy="466" r="88" style={{ fill: 'url(#linear-gradient)' }} />
          <circle cx="88" cy="782" r="88" style={{ fill: 'url(#linear-gradient-2)' }} />
          <path
            d="M0,0H391.88S608,19,627,250c0,0,36,180-190,273L725,812s-98,110-246,26L227,590l-1-252,144,3,1.08-1.44A126.35,126.35,0,0,0,376,195H199S17,207,0,0Z"
            style={{ fill: 'url(#linear-gradient-3)' }}
          />
        </g>
      </g>
    </svg>
  )
}
