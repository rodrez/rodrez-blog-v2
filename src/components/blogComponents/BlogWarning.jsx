import React from 'react'
import { BsInfoLg } from 'react-icons/bs'
import { TiWarning } from 'react-icons/ti'

const Icon = ({ getType }) => {
  return (
    <div className={'absolute -top-6 -left-8 m-auto rounded-full bg-white p-2 dark:bg-slate-700'}>
      <div
        className={`flex h-12  w-12 rounded-full border-4 border-[#6b2cf5] dark:border-light-green`}
      >
        {getType()}
      </div>
    </div>
  )
}

const BlogWarning = ({ children, title, variant }) => {
  const getType = () => {
    switch (variant) {
      case 'info':
        return <BsInfoLg className={`m-auto h-7 w-7 text-[#6b2cf5] dark:text-light-green`} />
      case 'warning':
        return <TiWarning className={`m-auto text-[#6b2cf5] dark:text-light-green`} size={30} />
      default:
        return <BsInfoLg className={`m-auto h-7 w-7 text-[#6b2cf5] dark:text-light-green`} />
    }
  }

  return (
    <div className="my-10 dark:text-white">
      <div
        className={`shadow-3xl relative rounded-r-2xl border-l-4 border-[#6b2cf5] bg-white dark:border-light-green dark:bg-slate-700`}
      >
        {/* Icon Starts */}
        <Icon getType={getType} />
        {/* Icon Ends */}

        {/* Content Container  Starts*/}
        <div className="rounded-r-2xl bg-white px-10 py-4 shadow-lg dark:bg-slate-700">
          {/* Title Starts*/}
          <div className={''}>
            <h5 className={`font-bold text-[#6b2cf5] dark:text-light-green`}>{title}</h5>
          </div>
          {/* Title Ends*/}

          {/* Text Starts*/}
          <article className={'prose-lg mt-2'}>{children}</article>
          {/* Text Ends*/}
        </div>
        {/* Content Container  Ends*/}
      </div>
    </div>
  )
}

export default BlogWarning