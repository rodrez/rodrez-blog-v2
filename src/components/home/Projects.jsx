import { classNames } from '@utils/general'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'

import SlideIn from '../animations/SlideIn'
import LayerImage from '../Image/LayerImage'

const SingleProject = ({ project, index }) => {
  return (
    <div
      key={index}
      className=" relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-10/12"
    >
      {/* Layered Image */}
      <div
        className={classNames(
          index % 2 === 0 ? '-left-32  lg:-left-2' : '-right-32 lg:-right-2',
          'absolute top-1/2 z-0 hidden h-80 -translate-y-1/2 overflow-hidden rounded-lg lg:block lg:w-9/12 2xl:w-7/12'
        )}
      >
        <LayerImage className={'shadow-md'} src={project.image} />
      </div>
      {/* Layered Image Ends */}
      {/* Project Information */}
      <div
        className={classNames(
          index % 2 === 0 ? 'lg:ml-auto lg:text-right' : 'lg:mr-auto',
          'z-1 relative my-auto max-w-2xl space-y-4 lg:w-7/12'
        )}
      >
        <p className="font-mono text-lg font-bold text-primary-600 dark:text-primary-400">
          Featured Project
        </p>
        <h4>{project.title}</h4>
        <div
          className={classNames(
            index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto',
            ' max-w-xl rounded-lg bg-white p-8 text-[#000621] shadow-lg shadow-slate-200 dark:bg-dark-background dark:text-slate-400 dark:shadow-slate-900'
          )}
        >
          {project.description}
        </div>
        <div
          className={classNames(
            index % 2 === 0 ? 'lg:ml-auto  lg:justify-end' : 'lg:mr-auto lg:justify-start',
            'flex w-8/12 flex-wrap gap-x-4 gap-y-2'
          )}
        >
          {project.stack.split(',').map((tech) => (
            <span className=" font-mono text-slate-700 dark:text-[#94b4be]" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {/* <GradientBorder> */}
        <Link href={project.url} passHref>
          <button className="rounded border-2 border-primary-600 py-1 px-2 text-xl font-medium text-primary-600 dark:border-primary-400 dark:text-primary-400 md:ml-0 md:mr-auto lg:mr-auto lg:ml-auto xl:px-12">
            Learn More
          </button>
        </Link>
        {/* </GradientBorder> */}
      </div>
      {/* Project Information Ends */}
    </div>
  )
}

export default function Projects() {
  const projects = [
    {
      id: uuid(),
      title: 'Next OMS',
      description: (
        <div className="space-y-2">
          <p>
            OMS is a centralized web-based system that helps tracking progress and completion of
            training, audits and documentation. OMS also enables visibility when an employee needs
            to be retrained or re-qualified.
          </p>
          <p>
            Additional features includes but are not limited to reports, dashboards, data exports,
            employee history, time spent training/auditing and more.
          </p>
        </div>
      ),
      stack: 'NextJS, Zustand, Django, DRF, Postgres, Tailwind, Cypress, Docker',
      image: '/static/images/projects/next-oms.png',
      url: 'projects/next-oms',
    },
    {
      id: uuid(),
      title: 'DSA',
      description: (
        <div className="space-y-2">
          <p>
            DSA is a blog that series focus on solving and explaining Data Structures and
            Algorithms. We go into depth on topics like Linked Lists, Trees, Graphs, Heaps, etc.
          </p>
          <p>We cover a variety of Blind 75 questions and LeetCode problems.</p>
        </div>
      ),
      stack: 'NextJS, Zustand, Tailwind, Cypress, MDX',
      image: '/static/images/projects/dsa.png',
      url: 'tags/dsa',
    },
    {
      id: uuid(),
      title: 'Mythus',
      description: (
        <div className="space-y-2">
          Mythus is a career assistant that helps you find the right job, or helps you build the
          skills you need to get the job.
        </div>
      ),
      stack: 'Next, tRPC, Prisma, Postgres, Tailwind, NextAuth, Docker',
      image: '/static/images/projects/mythus.png',
      url: 'https://mythus.io',
    },
    // {
    //   id: uuid(),
    //   title: 'Aracadefi',
    //   description: (
    //     <div className="space-y-2">
    //       Aracadefi is a web application for tracking and managing games based on crypto currencies.
    //     </div>
    //   ),
    //   stack: 'React, Redux, Node, Express, MongoDB, MUI, Jest, Enzyme',
    //   image: 'aracadefi.png',
    //   link: 'https://aracadefi.netlify.app/',
    // },
  ]

  return (
    <div className={'w-full'}>
      {/* <Projects /> */}
      <div className=" relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-11/12">
        {projects.map((project, index) => (
          <SlideIn key={project.id} reverse={index % 2 === 0}>
            <SingleProject project={project} index={index} />
          </SlideIn>
        ))}
      </div>
    </div>
  )
}
