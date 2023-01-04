import { supabase } from '@libs/supabase'
import React from 'react'
import toast from 'react-hot-toast'

import FadeBottomUp from '../../animations/FadeBottomUp'

export default function Newsletter() {
  const [validEmail, setValidEmail] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [formError, setFormError] = React.useState('')

  async function addEmail(e) {
    e.preventDefault()
    if (!email || validEmail === false) {
      toast.error(<div>Please enter a valid email!</div>, {
        className: 'dark:bg-dark-container bg-[#E2E8F0] text-slate-700 dark:text-white',
      })
      return
    }
    const { data, error } = await supabase
      .from('Newsletter')
      .insert([{ email: email, active: true }])

    if (data) {
      toast.success(<div>Successfully Subscribed!</div>, {
        className: 'dark:bg-dark-container bg-[#E2E8F0] text-slate-700 dark:text-white z-50',
      })
      setEmail('')
    }
    if (error && error.message.includes('duplicate key')) {
      setFormError('You are already subscribed to our newsletter!')
    }
  }

  //Check if email is valid
  React.useEffect(() => {
    if (email.includes('@') && email.includes('.') && email.length > 3) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }, [email])

  return (
    <FadeBottomUp>
      <div className="py-16 sm:py-24">
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-3xl bg-dark-background" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-700"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-primary-400 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-amber-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-amber-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl sm:tracking-tight">
                    Get notified when I release a new article.
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
                    Feel free to join our awesome newsletter to get the latest articles straight in
                    your inbox!
                  </p>
                </div>
                <form onSubmit={addEmail} className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="bg-px-5 block w-full rounded-md border border-transparent py-3 text-base font-medium text-white shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-400 sm:px-10"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
                <div className="mt-12 lg:mt-0 lg:ml-8 lg:flex-1">
                  {formError && (
                    <div className="mt-3 text-xs text-green-500">
                      {JSON.parse(JSON.stringify(formError), null, 2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeBottomUp>
  )
}
