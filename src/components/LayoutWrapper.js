import headerNavLinks from '@data/headerNavLinks'
import Logo from '@data/logo.svg'
import siteMetadata from '@data/siteMetadata'
import { useTheme } from 'next-themes'
import { memo } from 'react'

import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="fixed top-0 z-20 mx-auto flex w-11/12 items-center justify-between py-10 lg:left-1/2 lg:w-9/12 lg:-translate-x-1/2">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link key={link.title} href={link.href} className="p-1 font-medium sm:p-4">
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch
              onChange={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
              checked={resolvedTheme === 'light'}
              sunColor={'#ffc107'}
              moonColor={'#1B59F7'}
            />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default memo(LayoutWrapper)
