import { v4 as uuid } from 'uuid'

import { classNames } from '../../utils/general'

export default function Projects() {
  const projects = [
    {
      id: uuid(),
      title: 'Next OMS',
      summary:
        'Next OMS is a web application for managing and tracking trainings, audits and documents.',
    },
    {
      id: uuid(),
      title: 'DSA',
      summary: 'DSA is a blog that focus on solving and explaining Data Structures and Algorithms.',
    },
    {
      id: uuid(),
      title: 'Mythus',
      summary:
        'Mythus is a career assistant that helps you find the right job, or helps you build the skills you need to get the job.',
    },
    {
      id: uuid(),
      title: 'Aracadefi',
      summary:
        'Aracadefi is a web application for tracking and managing games based on crypto currencies.',
    },
  ]

  return (
    <div className="">
      <div className="mx-auto my-20 grid w-11/12 grid-cols-1 md:gap-12 xl:grid-cols-2 xl:gap-32 ">
        <div className="relative order-2 grid grid-cols-2 flex-wrap gap-6 xl:order-1">
          {/* Loop 4 times */}
          {projects.map((feature, index) => (
            <div
              key={uuid()}
              className={classNames(
                index === 1
                  ? '-top-4 -right-4 h-[22rem] w-[22rem] p-4'
                  : 'h-72 w-full max-w-[18rem]  grow-0 self-end p-8',
                ' rounded-2xl bg-slate-100 shadow-lg dark:bg-[#000621] dark:shadow-slate-900'
              )}
            >
              <div className="">
                <div
                  className={classNames(
                    'my-3 h-3 w-16 rounded-lg',
                    index % 2 === 0 ? ' bg-dark-blue' : 'bg-r-purple'
                  )}
                />
                <h5 className="text-3xl font-bold">{feature.title}</h5>
                <p className="">{feature.summary}</p>
              </div>
            </div>
          ))}

          {/* Floating Circles */}
          <div className="main-color absolute  -top-8 -left-8 z-[-1] h-20 w-20 rounded-3xl bg-red-400 shadow-lg" />
          <div className="main-color absolute -bottom-16 left-[4.25rem] z-[-1] h-52 w-52 rounded-3xl shadow-xl" />
          <div className="main-color absolute top-1/2 bottom-1/2 -right-20 z-[-1] my-auto hidden h-40 w-40 rounded-3xl md:block" />
        </div>
        <div className="order-1 flex flex-col justify-center md:px-6 xl:order-2 xl:px-16">
          <h6 className="gradient-text mb-12">Projects</h6>
          <p className="mb-12 text-5xl font-bold">Projects? We got some!</p>
          <p className="text-lg font-light leading-loose text-[#9999B2] lg:text-2xl">
            You&apos;ve always wanted to find a way to animate your website without all the
            difficulty, right? Well now you can.
          </p>
          <button className="main-gradient my-12 mr-auto ml-auto rounded-2xl px-6 py-3 text-2xl font-bold md:ml-0 md:mr-auto xl:px-12">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}
