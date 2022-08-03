// import Image from "next/image"
import Link from 'next/link'
import { FaChevronCircleRight } from 'react-icons/fa'

import { classNames } from '../../../utils/general'

export default function AlgoCard({
  name,
  description,
  image,
  link,
  type,
  reversed,
  timeComplexity,
  spaceComplexity,
}) {
  return (
    <div
      style={{
        gridTemplateColumns: 'auto auto',
        columnGap: '20px',
      }}
      className="relative grid h-[400px] w-[400px] grid-flow-col gap-5 rounded-2xl bg-[#F7F7F7] p-5 shadow-md dark:bg-[#131B30] md:w-[586px]"
    >
      {/* Type */}
      <p
        className={classNames(
          'absolute top-6 mb-2 font-semibold uppercase',
          reversed ? 'left-64' : 'left-4'
        )}
      >
        {type} Algorithm
      </p>

      {/* Complexity and Description */}

      <div
        style={{
          display: 'grid',
          gap: '8px',
          width: '287px',
          height: '100%',
          marginTop: '30px',
          WebkitMaskImage: 'linear-gradient(rgb(255, 255, 255) 80%, rgba(255, 255, 255, 0) 100%)',
        }}
        className={classNames(
          'w-[200px] overflow-auto rounded border p-4 text-slate-700 dark:text-white md:w-[287px]',
          reversed ? 'order-2' : 'order-1'
        )}
      >
        <p className="mt-4">
          <span className="font-semibold">Time Complexity:</span>
          <br />
          <span
            className={classNames(
              'font-semibold',
              'bg-gradient-to-br from-[#6b2cf5] to-[#d450e6] bg-clip-text text-transparent dark:from-[#b3eb50] dark:to-light-green'
            )}
          >
            {timeComplexity}
          </span>
        </p>
        <p>
          <span className="font-semibold">Space Complexity:</span>
          <br />
          <span
            className={classNames(
              'font-semibold',
              'bg-gradient-to-br from-[#6b2cf5] to-[#d450e6] bg-clip-text text-transparent dark:from-[#b3eb50] dark:to-light-green'
            )}
          >
            {spaceComplexity}
          </span>
        </p>
        <p className="pb-6">
          <span className="font-semibold">Description:</span>
          <br />
          {description}
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr 1fr',
          minWidth: '200px',
          height: '360px',
          borderRadius: '20px',
          // background: 'linear-gradient(209.21deg, rgb(12, 39, 178) 13.57%, rgb(133, 218, 213) 98.38%)',
          padding: '20px',
        }}
        className={classNames(
          'bg-gradient-to-br from-[#6b2cf5] to-[#d450e6] dark:from-[#b3eb50] dark:to-light-green',
          ' text-slate-700 dark:text-gray-200',
          reversed ? 'order-1' : 'order-2'
        )}
      >
        {/* Image */}
        <div className="h-40 rounded-xl bg-dark-background ">{image}</div>
        <div className="w-full text-center">
          {/* Title */}
          <div>
            <h1 className="my-4 text-2xl font-bold text-white dark:text-slate-700">{name}</h1>
          </div>
          {/* Type */}
          <div className="flex justify-center pt-4">
            {/* View Algorithm */}
            <Link href={link} passHref>
              <a className="rounded-xl bg-kinda-white p-2 dark:bg-dark-container">
                <span className="font-semibold">View Algorithm</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
