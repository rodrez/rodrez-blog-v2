import { v4 as uuid } from 'uuid'

export default function Features() {
  const features = [
    {
      id: uuid(),
      title: 'Production-Ready',
      summary: 'Motion is based on Framer Motion, a production-ready motion library for React.',
    },
    {
      id: uuid(),
      title: 'Customizable',
      summary:
        'Motion is customizable with a simple API. You can add custom animations, easings, and more.',
    },
    {
      id: uuid(),
      title: 'Flexible',
      summary: 'Motion is built on top of React, so you can use it in any React application.',
    },
    {
      id: uuid(),
      title: 'Easily Extensible',
      summary:
        'Motion is built on top of Framer Motion, so you can use it in any React application.',
    },
  ]

  return (
    <div>
      <div className="mx-auto my-20 grid w-11/12 grid-cols-1 md:gap-12 xl:grid-cols-2 xl:gap-32 ">
        <div className="relative order-2 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:order-1">
          {/* Loop 4 times */}
          {features.map((feature) => (
            <div
              key={uuid()}
              style={{
                boxShadow: 'var(--shadow-dark-medium)',
              }}
              className="bg-dark-bg-secondary grid h-72 w-full grid-cols-1 rounded-2xl p-6"
            >
              <div className="even:bg-secondary my-3 h-3 w-16 rounded-lg odd:bg-primary" />
              <h5 className="text-3xl font-bold">{feature.title}</h5>
              <p className="">{feature.summary}</p>
            </div>
          ))}

          {/* Floating Circles */}
          <div
            style={{
              boxShadow: 'var(--shadow-dark-medium)',
            }}
            className="main-color absolute -top-8 -left-8 z-[-1] h-20 w-20 rounded-3xl shadow-lg"
          />
          <div
            style={{
              boxShadow: 'var(--shadow-dark-medium)',
            }}
            className="main-color absolute -bottom-16 left-[4.25rem] z-[-1] h-52 w-52 rounded-3xl shadow-xl"
          />
          <div
            style={{
              boxShadow: 'var(--shadow-dark-medium)',
            }}
            className="main-color absolute top-1/2 bottom-1/2 -right-20 z-[-1] my-auto hidden h-40 w-40 rounded-3xl md:block"
          />
        </div>
        <div className="order-1 flex flex-col justify-center md:px-6 xl:order-2 xl:px-16">
          <h6 className="gradient-text mb-12">Features</h6>
          <p className="mb-12 text-5xl font-bold">Features? We got them!</p>
          <p className="text-lg font-light leading-loose text-[#9999B2] lg:text-2xl">
            You&apos;ve always wanted to find a way to animate your website without all the
            difficulty, right? Well now you can.
          </p>
          <button className="main-gradient my-12 mr-auto ml-auto rounded-2xl px-6 py-3 text-2xl font-bold md:ml-0 md:mr-auto xl:px-12">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}
