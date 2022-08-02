import React from 'react'
import { animated } from 'react-spring'
import toast from 'react-hot-toast'
import { supabase } from '@libs/supabase'
import Confetti from 'react-confetti'

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
      <animated.div className="py-20 lg:py-40 ">
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
                />

                {/* If email is longer than 5 display */}
                {email.length > 3 && validEmail && (
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
      </animated.div>
    </div>
  )
}
