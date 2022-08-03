import { supabase } from '@libs/supabase'
import React from 'react'
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'
import { animated } from 'react-spring'

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
    <div>
      <div className="">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="rounded-3xl bg-violet-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
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
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-100">
                We care about the protection of your data. Read our{' '}
                <a href="#" className="font-medium text-white underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <animated.div className="py-20 lg:py-40 ">
        <div className="relative w-[80vw] rounded-2xl bg-[#E2E8F0] px-8 py-16 shadow-md shadow-slate-400 dark:bg-dark-container dark:shadow-slate-900">
          <div className="text-center">
            <h1 className="mb-4 bg-gradient-to-br from-[#6b2cf5] to-[#d450e6] bg-clip-text text-3xl  font-bold text-transparent dark:from-[#b3eb50] dark:to-light-green">
              Subscribe to our newsletter
            </h1>
            <p className=" mb-8 text-lg">
              Join our newsletter to get the latest news and updates. No spam, we promise!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-around gap-8 lg:w-8/12 lg:flex-row">
              <div className="relative w-full">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="h-16 w-full rounded-xl px-4 outline-none focus:outline-[#6b2cf5] dark:bg-dark-input dark:focus:outline-[#b3eb50] "
                  placeholder="Enter your email"
                /> */}

      {/* If email is longer than 5 display */}
      {/* {email.length > 3 && validEmail && (
                  <div className="mt-2 text-xs text-light-green">
                    Wonderful! This email is valid.
                  </div>
                )}
                {email.length > 3 && !validEmail && (
                  <div className="mt-2 text-xs text-accent">This email is not valid.</div>
                )}
              </div>

              <button
                onClick={addEmail}
                className="h-16 rounded-lg bg-gradient-to-br from-[#6b2cf5] to-[#d450e6] px-8 text-xl font-bold uppercase text-white dark:from-[#b3eb50] dark:to-light-green dark:text-gray-600"
              >
                Subscribe
              </button>
              {showConfetti && <Confetti className={'w-full'} height={500} />}
            </div>
          </div>
        </div>
      </animated.div> */}
    </div>
  )
}
