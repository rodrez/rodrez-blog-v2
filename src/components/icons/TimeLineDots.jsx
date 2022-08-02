import React from 'react'

const TimeLineDotsLeft = (props) => {
  return (
    <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
      <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
      <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
      <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
      <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
      <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
      <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
      <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
    </svg>
  )
}

const TimeLineDotsRight = (props) => {
  return (
    <svg
      className=""
      width="60"
      height="12"
      viewBox="0 0 60 12"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
      <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
      <circle
        cx="42"
        cy="6"
        r="1.5"
        transform="rotate(-180 42 6)"
        stroke="#4338CA"
        strokeOpacity="0.3"
      />
      <circle
        cx="26"
        cy="6"
        r="1.5"
        transform="rotate(-180 26 6)"
        stroke="#4338CA"
        strokeOpacity="0.7"
      />
      <circle
        cx="50"
        cy="6"
        r="1.5"
        transform="rotate(-180 50 6)"
        stroke="#4338CA"
        strokeOpacity="0.2"
      />
      <circle
        cx="34"
        cy="6"
        r="1.5"
        transform="rotate(-180 34 6)"
        stroke="#4338CA"
        strokeOpacity="0.5"
      />
      <circle
        cx="58"
        cy="6"
        r="1.5"
        transform="rotate(-180 58 6)"
        stroke="#4338CA"
        strokeOpacity="0.1"
      />
    </svg>
  )
}

export { TimeLineDotsLeft, TimeLineDotsRight }
