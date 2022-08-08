import { supabase } from '@libs/supabase'
import React from 'react'
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'

import FadeBottomUp from '../../animations/FadeBottomUp'

export default function Newsletter() {
  const [validEmail, setValidEmail] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [showConfetti, setShowConfetti] = React.useState(false)
  const [formError, setFormError] = React.useState('')

  async function addEmail() {
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
      setShowConfetti(true)
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

  React.useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false)
    }, 4000)
  }, [showConfetti])

  const newsletterRef = React.useRef(null)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

  React.useLayoutEffect(() => {
    if (newsletterRef.current) {
      setDimensions({
        width: newsletterRef.current.offsetWidth,
        height: newsletterRef.current.offsetHeight,
      })
    }
  }, [])

  return (
    <FadeBottomUp>
      <div className="z-10 my-12">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div
            ref={newsletterRef}
            className="rounded-3xl border-2 border-primary-600 py-10 px-6 dark:border-primary-400 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20"
          >
            {showConfetti && (
              <Confetti
                className="mt-28"
                width={dimensions.width}
                height={dimensions.height}
                numberOfPieces={100}
              />
            )}
            <div className=" lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight">Sign up for our newsletter</h2>
              <p className="mt-4 max-w-3xl text-lg">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat
                commodo. Elit sunt amet fugiat.
              </p>
            </div>
            <div className="lg:mt-0 lg:ml-8 lg:flex-1">
              <div className="mt-12 lg:mt-0 lg:ml-8 lg:flex-1">
                <div className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
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
                    className="w-full rounded-md px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-400 dark:bg-dark-background"
                    placeholder="Enter your email"
                  />

                  <button
                    onClick={addEmail}
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-amber-600 px-5 py-3 text-base font-medium text-white hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 dark:bg-amber-400 dark:text-slate-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </div>
                <p className="mt-3 text-sm text-indigo-100">
                  {!formError && email.length > 3 && validEmail && (
                    <div className="mt-2 text-xs">Wonderful! This email is valid.</div>
                  )}
                  {email.length > 3 && !validEmail && (
                    <div className="mt-2 text-xs">This email is not valid.</div>
                  )}
                </p>
              </div>
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
    </FadeBottomUp>
  )
}
