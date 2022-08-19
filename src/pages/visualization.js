import { useEffect, useRef, useState } from 'react'

export default function Visualization() {
  const [array, setArray] = useState('1,2,3,4,5')
  const [cleanedArray, setCleanedArray] = useState([])
  const [error, setError] = useState('')
  const r1 = useRef(null)
  const r2 = useRef(null)

  // Create an svg line from element with ID of tail to element with id of last-tail
  useEffect(() => {
    try {
      setCleanedArray(array.split(','))
    } catch {
      setError('Remember to use commas to separate the array/list elements.')
    }
  }, [array])

  const Line = ({ e1, e2, color = 'white' }) => {
    // let element1 = document.getElementById(e1)
    // let element2 = document.getElementById(e2)
    // console.log(e1, e2)
    let el1 = document.getElementById(e1)
    let el2 = document.getElementById(e2)
    let x1 = el1.getBoundingClientRect().x + el1.getBoundingClientRect().width / 2
    let y1 = el1.getBoundingClientRect().y + el1.getBoundingClientRect().height / 2
    let x2 = el2.getBoundingClientRect().x + el2.getBoundingClientRect().width / 2
    let y2 = el2.getBoundingClientRect().y + el2.getBoundingClientRect().height / 2
    // let x1
    // let y1
    // let x2
    // let y2

    return (
      <svg className="absolute" width="500" height="500">
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} />
      </svg>
    )
  }

  return (
    <div className="my-24">
      <div>Linked List</div>
      Enter array (separated by commas):
      <input value={array} onChange={(e) => setArray(e.target.value)} />
      {error}
      <div className="relative mt-12 flex">
        <div className="flex flex-col p-2">
          <p>head:</p>
          <p ref={r1} id={'tail'}>
            tail:
          </p>
        </div>
        {cleanedArray.map((data, index) => {
          return (
            <div key={index} className={'mx-4 border py-2 px-4'}>
              <p id={'head' + index}>{data}</p>
              <p
                ref={r2}
                id={index === cleanedArray.length - 1 ? 'last-element' : 'next' + (index + 1)}
              >
                {cleanedArray[index + 1] || null}
              </p>
            </div>
          )
        })}
        <Line e1={r1.current} e2={'last-element'} />
      </div>
    </div>
  )
}
