const projectsData = [
  {
    id: 1,
    title: 'Next OMS',
    description: (
      <div className="space-y-2">
        <p>
          OMS is a centralized web-based system that helps tracking progress and completion of
          training, audits and documentation. OMS also enables visibility when an employee needs to
          be retrained or re-qualified.
        </p>
        <p>
          Additional features includes but are not limited to reports, dashboards, data exports,
          employee history, time spent training/auditing and more.
        </p>
      </div>
    ),
    stack: 'NextJS, Zustand, Django, DRF, Postgres, Tailwind, Cypress, Docker',
    imgSrc: '/static/images/projects/next-oms.png',
    href: '',
  },
  {
    id: 2,
    title: 'DSA',
    description: (
      <div className="space-y-2">
        <p>
          DSA is a blog series that focus on solving and explaining Data Structures and Algorithms.
          We go into depth on topics like Linked Lists, Trees, Graphs, Heaps, etc.
        </p>
        <p>We cover a variety of Blind 75 questions and LeetCode problems.</p>
      </div>
    ),
    stack: 'NextJS, Zustand, Tailwind, Cypress, MDX',
    imageSrc: '/static/images/projects/mythus.png',
    href: '/static/images/projects/',
  },
  {
    id: 3,
    title: 'Mythus',
    description: (
      <div>
        Mythus is a career assistant that helps you find the right job, or helps you build the
        skills you need to get the job.
      </div>
    ),
    stack: 'Next, tRPC, Prisma, Postgres, Tailwind, NextAuth, Docker',
    image: '/static/images/projects/mythus.png',
    link: 'https://mythus.netlify.app/',
  },
  {
    id: 4,
    title: 'Aracadefi',
    description: (
      <div>
        Aracadefi is a web application for tracking and managing games based on crypto currencies.
      </div>
    ),
    stack: 'React, Redux, Node, Express, MongoDB, Tailwind, Jest',
    image: 'aracadefi.png',
    link: 'https://aracadefi.netlify.app/',
  },
]

export default projectsData
