export default function SectionContainer({ children }) {
  return (
    <div className=" mx-auto my-12 px-4 prose-li:marker:text-dark-blue sm:px-6 lg:my-24 xl:w-9/12 xl:px-0">
      {children}
    </div>
    // mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0
  )
}
