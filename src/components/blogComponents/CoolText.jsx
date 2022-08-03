import Head from 'next/head'
import React from 'react'

const CoolText = ({ children, color }) => {
  return (
    <span className={'inline-block '}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>

      <span className={'font-sriracha font-black italic ' + color}>{children}</span>
    </span>
  )
}

export default CoolText
