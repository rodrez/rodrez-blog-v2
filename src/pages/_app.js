import '@css/tailwind.css'
import '@css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import '@fontsource/sriracha'

import Analytics from '@components/analytics'
import { ClientReload } from '@components/ClientReload'
import LayoutWrapper from '@components/LayoutWrapper'
import siteMetadata from '@data/siteMetadata'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Toaster />
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
