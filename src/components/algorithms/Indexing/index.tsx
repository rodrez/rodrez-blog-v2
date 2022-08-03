import { FaArrowUp } from 'react-icons/fa'

import { classNames } from '../../../utils/general'

/**
 *
 * @param length - The length of the array generated
 * @param start - Which index does the array start
 * @param highlight - Which elements are highlighted
 * @returns
 */
export default function Indexing({ length, start = 0, highlight = [] }) {
  const arr = () => {
    let a = []
    for (let index = 0; index < length; index++) {
      const element = index + 1
      a.push(element)
    }
    return a
  }

  return (
    <div className="flex">
      <div className="flex flex-col">
        <span className=" rounded-lt-md flex items-center justify-center border-2 border-slate-500 px-2">
          Elements:
        </span>
        <span>
          <FaArrowUp className=" my-1 opacity-0" />
        </span>
        <span className=" rounded-lb-md flex items-center justify-center border-2 border-slate-500  px-2">
          Indexes:
        </span>
      </div>
      <div className="flex">
        {arr().map((item: number, index: number) => (
          <div className={'flex flex-col'} key={index}>
            <span
              className={classNames(
                'flex w-8  items-center justify-center border-2',
                highlight.includes(index)
                  ? 'border-4 border-red-600 dark:border-amber-400'
                  : ' border-slate-500'
              )}
            >
              {item + start}
            </span>
            <span className="my-1 flex justify-center">
              <FaArrowUp className="text-r-purple dark:text-light-green" />
            </span>
            <span
              className={classNames(
                'flex w-8  items-center justify-center border-2',
                highlight.includes(index)
                  ? 'border-4 border-red-600 dark:border-amber-400'
                  : ' border-slate-500'
              )}
            >
              {index}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
