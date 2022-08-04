import { supabase } from '@libs/supabase'
import React from 'react'
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'
import { animated } from 'react-spring'

import FadeBottomUp from '../../animations/FadeBottomUp'

export default function Newsletter() {
  const [validEmail, setValidEmail] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [showConfetti, setShowConfetti] = React.useState(false)

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
        className: 'dark:bg-dark-container bg-[#E2E8F0] text-slate-700 dark:text-white',
      })
      setEmail('')
      setShowConfetti(true)
    }
    if (error) {
      toast.error(<div>Something went wrong!</div>, {
        className: 'dark:bg-dark-container bg-[#E2E8F0] text-slate-700 dark:text-white',
      })
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
    }, 8000)
  }, [showConfetti])

  return (
    <FadeBottomUp>
      <div className="z-10 mb-12 mt-72">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="main-color rounded-3xl py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
            <div className=" lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat
                commodo. Elit sunt amet fugiat.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
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
                  className="w-full rounded-md px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-cyan-700 dark:bg-[#000621]"
                  placeholder="Enter your email"
                />

                <button
                  onClick={addEmail}
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-100">
                {email.length > 3 && validEmail && (
                  <div className="mt-2 text-xs">Wonderful! This email is valid.</div>
                )}
                {email.length > 3 && !validEmail && (
                  <div className="mt-2 text-xs">This email is not valid.</div>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeBottomUp>
  )
}
