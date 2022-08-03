import { BsInfoLg } from 'react-icons/bs'

export default function InformationBlock({ children, title }) {
  return (
    <div className="relative my-12 mx-auto w-10/12 rounded-r-2xl border-l-4 border-r-purple bg-white px-12 py-8 dark:border-light-green dark:bg-dark-cover">
      <div className="absolute -left-7 -top-7 m-auto h-14 w-14 rounded-full border-4 border-r-purple bg-white p-2 dark:border-light-green dark:bg-dark-cover">
        {/* <BsInfoLg
          className={`h-7 w-7 text-[#6b2cf5] dark:text-light-green m-auto`}
        /> */}
      </div>
      <div className="">
        <h1 className="text-2xl font-bold text-r-purple dark:text-light-green">{title}</h1>
        {children}
      </div>
    </div>
  )
}
