import { classNames } from '@utils/general'
import { v4 as uuid } from 'uuid'

import SlideIn from '../animations/SlideIn'
import LayerImage from '../Image/LayerImage'

const SingleProject = ({ project, index }) => {
  return (
    <div
      key={index}
      className=" relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-10/12"
    >
      <div
        className={classNames(
          index % 2 === 0 ? 'left-4 ' : 'right-4',
          'absolute top-1/2 z-0 h-80 -translate-y-1/2 overflow-hidden rounded-lg  xl:w-6/12'
        )}
      >
        <LayerImage className={'shadow-md'} src={project.image} />
      </div>
      <div
        className={classNames(
          index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto',
          'z-1 relative my-auto w-7/12 max-w-2xl space-y-4'
        )}
      >
        <p className="font-mono text-lg text-blue-500 dark:text-cyan-300">Featured Project</p>
        <h4>{project.title}</h4>
        <div
          className={classNames(
            index % 2 === 0 ? 'ml-auto' : 'mr-auto',
            ' max-w-xl rounded-lg bg-white p-8 text-[#000621] shadow-lg shadow-slate-200 dark:bg-dark-background dark:text-slate-400 dark:shadow-slate-900'
          )}
        >
          {project.description}
        </div>
        <div
          className={classNames(
            index % 2 === 0 ? 'justify-end ' : 'justify-start',
            'flex gap-x-4 gap-y-2'
          )}
        >
          {project.stack.split(',').map((tech) => (
            <span className=" font-mono text-slate-700 dark:text-[#94b4be]" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {/* <GradientBorder> */}
        <button className="mr-auto ml-auto rounded border border-blue-500 py-1 text-xl font-medium text-blue-500 dark:border-cyan-400 dark:text-cyan-300 md:ml-0 md:mr-auto xl:px-12">
          Learn More
        </button>
        {/* </GradientBorder> */}
      </div>
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
      stack: 'React, Redux, Node, Express, MongoDB, MUI, Jest, Enzyme',
      image: '/static/images/projects/next-oms.png',
      url: 'https://next-oms.netlify.app/',
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
      stack: 'React, Node, Express, MongoDB, MUI, Jest, Enzyme',
      image: '/static/images/projects/mythus.png',
      url: 'https://dsa.netlify.app/',
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

      stack: 'React, Node, Express, MongoDB, MUI, Jest, Enzyme',
      image: '/static/images/projects/mythus.png',
      url: 'https://mythus.netlify.app/',
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
