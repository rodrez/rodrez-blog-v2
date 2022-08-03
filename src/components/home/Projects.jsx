import Image from '@components/Image'
import { v4 as uuid } from 'uuid'

import { classNames } from '../../utils/general'
import LayerImage from '../Image/LayerImage'

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
            to be retrained or requalified.
          </p>
          <p>
            Additional features includes but are not limited to reports, dashboards, data exports,
            employee history, time spent training/auditing and more.
          </p>
        </div>
      ),
      stack: 'React, Redux, Node, Express, MongoDB, Material UI, Jest, Enzyme',
      image: 'next-oms.png',
      link: 'https://next-oms.netlify.app/',
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
      stack: 'React, Node, Express, MongoDB, Material UI, Jest, Enzyme',
      image: 'dsa.png',
      link: 'https://dsa.netlify.app/',
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

      stack: 'React, Node, Express, MongoDB, Material UI, Jest, Enzyme',
      image: 'mythus.png',
      link: 'https://mythus.netlify.app/',
    },
    {
      id: uuid(),
      title: 'Aracadefi',
      description: (
        <div className="space-y-2">
          Aracadefi is a web application for tracking and managing games based on crypto currencies.
        </div>
      ),
      stack: 'React, Redux, Node, Express, MongoDB, Material UI, Jest, Enzyme',
      image: 'aracadefi.png',
      link: 'https://aracadefi.netlify.app/',
    },
  ]

  return (
    <div className={'w-full'}>
      {/* <Projects /> */}
      <div className=" relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-11/12">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-10/12"
          >
            <div
              className={classNames(
                index % 2 === 0 ? 'left-4 ' : 'right-4',
                'absolute top-1/2 z-0 h-80 -translate-y-1/2 overflow-hidden rounded-lg rounded-br-3xl rounded-tl-3xl xl:w-6/12'
              )}
            >
              <LayerImage src={'https://source.unsplash.com/random/800x600'} />
            </div>
            <div
              className={classNames(
                index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto',
                'z-1 relative my-auto  w-7/12 max-w-2xl space-y-4'
              )}
            >
              <p className="font-mono text-lg text-cyan-400">Featured Project</p>
              <h4>{project.title}</h4>
              <div
                className={classNames(
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto',
                  ' max-w-xl rounded-lg bg-slate-800 p-8'
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
                  <span className=" font-mono text-slate-500" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <button className="main-gradient my-6 mr-auto ml-auto rounded px-6 py-1 text-2xl font-bold md:ml-0 md:mr-auto xl:px-12">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
