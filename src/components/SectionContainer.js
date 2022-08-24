export default function SectionContainer({ children }) {
  return (
    <div className="relative mx-auto my-24 flex w-full gap-x-12 px-4 sm:px-6 lg:my-12 xl:w-9/12 xl:px-0">
      {children}
    </div>
  )
}
