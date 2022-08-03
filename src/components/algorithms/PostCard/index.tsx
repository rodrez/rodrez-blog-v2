import Head from 'next/head'

export default function PostCard({ title }) {
  return (
    <div className="flex min-h-[12rem] w-full items-center justify-center rounded-lg bg-gradient-to-br from-white to-[#F6F2F2] p-4 text-center shadow-lg dark:from-[#130F40] dark:to-dark-background dark:shadow-dark-container">
      <h1 className="flex-wrap bg-gradient-to-r from-purple-500 to-r-purple bg-clip-text font-halyard text-6xl font-extrabold text-transparent drop-shadow-lg dark:from-dark-green dark:to-light-green">
        {title}
      </h1>
    </div>
  )
}
