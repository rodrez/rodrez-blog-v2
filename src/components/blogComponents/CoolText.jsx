import React from 'react'

const CoolText = ({ children, space }) => {
  return (
    <span className={'inline-block'}>
      <span
        style={{ fontFamily: 'Sriracha, cursive' }}
        className={' font-sriracha font-black italic text-amber-500 dark:text-amber-400'}
      >
        {children}
        {space && <>&nbsp;</>}
      </span>
    </span>
  )
}

export default CoolText
