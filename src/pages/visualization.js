import { useEffect, useRef, useState } from 'react'

import SVGGrid from '../components/Line'

export default function Visualization() {
  const [array, setArray] = useState('1,2,3,4,5')
  const [cleanedArray, setCleanedArray] = useState([])
  const [error, setError] = useState('')
  const parentRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const r1 = useRef(null)
  const r2 = useRef(null)

  const getParentWidthAndHeight = () => {
    const { width, height } = parentRef.current.getBoundingClientRect()
    return { width, height }
  }

  // Create an svg line from element with ID of tail to element with id of last-tail
  useEffect(() => {
    try {
      setCleanedArray(array.split(','))
    } catch {
      setError('Remember to use commas to separate the array/list elements.')
    }
  }, [array])

  useEffect(() => {
    setSize(getParentWidthAndHeight())
  }, [])

  const [lines, setLines] = useState([
    { from: 'topLeft', to: 'centerLeft' },
    { from: 'bottomCenter', to: 'centerRight' },
  ])

  return (
    <div className="my-24 w-full">
      <div>Linked List</div>
      Enter array (separated by commas):
      <input value={array} onChange={(e) => setArray(e.target.value)} />
      {error}
      <div ref={parentRef} className="relative mt-12 flex w-6/12 flex-col">
        <div className="flex justify-around">
          <div className="flex flex-col p-2">
            <p>head:</p>
            <p ref={r1} id={'tail'}>
              tail:
            </p>
          </div>
          <div className="flex w-full justify-between">
            {cleanedArray.map((data, index) => {
              return (
                <div key={index} className={'border py-2 px-4'}>
                  <p id={'head' + index}>{data}</p>
                  <p
                    ref={r2}
                    id={index === cleanedArray.length - 1 ? 'last-element' : 'next' + (index + 1)}
                  >
                    {cleanedArray[index + 1] || 0}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mx-4 flex h-4 border-b-2 border-l-2 border-r-2 border-amber-600"></div>
        {/* {typeof window !== 'undefined' && (
          <Line e1={'tail'} size={{ width: size.width, height: size.height }} e2={'last-element'} />
        )} */}
        {/* <div className="w-[30rem] bg-white"> */}
        {/* </div> */}
      </div>
      {/* <UncontrolledDiagram /> */}
      <SVGGrid
        lines={lines}
        addNewLine={(newLine) => setLines((lines) => [...lines, newLine])}
        removeLineByIndex={(lineIdx) =>
          setLines([...lines.slice(0, lineIdx), ...lines.slice(lineIdx + 1)])
        }
      />
    </div>
  )
}
