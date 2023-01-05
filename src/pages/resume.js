import Link from '@components/Link'
import { saveAs } from 'file-saver'
import { FaDownload } from 'react-icons/fa'

import {
  education,
  jobOne,
  jobTwo,
  languages,
  technicalExperience,
  technologies,
} from '../data/resumeData'

function Resume() {
  return (
    <div className="mx-auto mb-24 lg:w-9/12">
      <div>
        <h3 className="text-center">Resume</h3>
        <button
          onClick={() =>
            saveAs('./Fabian Rodriguez Resume.pdf', 'Fabian Rodriguez Software Resume')
          }
          className="mx-auto mt-6 flex items-center gap-x-4 rounded-xl border-0 bg-primary-600 py-2 px-8 text-lg font-bold text-white hover:bg-opacity-80 dark:bg-primary-400 dark:text-[#000621]"
        >
          Download <FaDownload />
        </button>
      </div>

      {/* Header */}
      <div className="mt-12 grid lg:grid-cols-3">
        <div className="text-left">
          <p className="">Irving, Texas</p>
          <Link href={'https://www.github.com/rodrez'}>www.github.com/rodrez</Link>
        </div>
        <div className="text-left lg:text-center">
          <h6>Fabian J. Rodriguez</h6>
        </div>
        <div className="text-left lg:text-right">
          <p>fabian.rodrez@gmail.com</p>
          <Link
            className="text-primary-600 dark:text-primary-400"
            href={'https://www.linkedin.com/in/f-rodrez/'}
          >
            https://www.linkedin.com/in/f-rodrez/
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xl font-bold text-primary-600 dark:text-primary-400">Employment</p>
        <div className="h-0.5 bg-slate-600" />

        {/* Jobs */}
        <div className="mt-4">
          {/* Job 1 Header */}
          <div className="grid lg:grid-cols-3">
            <p className="text-left font-bold ">BI Analyst / Software Engineer</p>
            <p className="text-left font-bold lg:text-center">DB Schenker</p>
            <p className="text-left font-bold lg:text-right">August 2018 - Present</p>
          </div>

          <JobItem job={jobOne} />
          <JobItem job={jobTwo} />
        </div>

        {/* Education */}
        <div>
          <p className="mt-6 text-xl font-bold text-primary-600 dark:text-primary-400">Education</p>
          <div className="h-0.5 bg-slate-600" />
          <div className="mt-4">
            {/* Education Header */}
            <div className="grid lg:grid-cols-3">
              <p className="text-left font-bold ">{education.location}</p>
              <p className="text-left font-bold lg:text-center">{education.college}</p>
              <p className="text-left font-bold lg:text-right">{education.date}</p>
            </div>
            <div className="mt-2">
              <ul>
                <li>Major: {education.major}</li>
                <li>Minor: {education.minor}</li>
              </ul>
              <p className="font-bold leading-7">
                Programming Coursework:{' '}
                {education.courseWork.map((c) => (
                  <span
                    className="mx-1 flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb]"
                    key={c}
                  >
                    {c}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Experience */}
        <div>
          <p className="mt-6 text-xl font-bold text-primary-600 dark:text-primary-400">
            Technical Experience
          </p>
          <div className="h-0.5 bg-slate-600" />

          {technicalExperience.map((exp) => {
            return (
              <div key={exp.name}>
                <p className="font-bold leading-7">
                  <Link className="text-primary-600  dark:text-primary-400" href={exp.href}>
                    {exp.name}
                  </Link>{' '}
                  - {exp.date}
                </p>
                <ul className="list-inside list-disc">
                  <li> {exp.description}</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      className="flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb] "
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Languages and Technologies */}
        <div>
          <p className="mt-6 text-xl font-bold text-primary-600 dark:text-primary-400">
            Languages and Technologies
          </p>
          <div className="h-0.5 bg-slate-600" />
          <div>
            (Proficient):{' '}
            {languages.proficient.map((lang) => (
              <span
                className="mx-1 flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb] "
                key={lang}
              >
                {lang}
              </span>
            ))}
            (Familiar):{' '}
            {languages.familiar.map((lang) => (
              <span
                className="mx-1 flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb] "
                key={lang}
              >
                {lang}
              </span>
            ))}
            (Novice):{' '}
            {languages.proficient.map((lang) => (
              <span
                className="mx-1 flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb] "
                key={lang}
              >
                {lang}
              </span>
            ))}
          </div>
          <div>
            (Proficient):{' '}
            {technologies.proficient.map((lang) => (
              <span
                className="mx-1 flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb] "
                key={lang}
              >
                {lang}
              </span>
            ))}
            (Familiar):{' '}
            {technologies.familiar.map((lang) => (
              <span
                className="mx-1 flex-grow-0 items-center rounded bg-slate-200 py-0.5 px-1 font-normal text-[#0668d9] dark:bg-[#010819] dark:text-[#2461fb] "
                key={lang}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

const JobItem = ({ job }) => {
  return (
    <div className="ml-2 mt-2">
      <p className="font-medium">{job.name}</p>
      <ul className="list-inside list-disc">
        {job.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  )
}
