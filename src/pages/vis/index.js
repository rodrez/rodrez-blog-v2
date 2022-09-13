import { wait } from '@utils/general'
import { useState } from 'react'

import { useInterval } from '../../hooks/useInterval'

export default function VisHome() {
  const arr = [1, 2, 3, 4, 5]
  const [results, setResults] = useState([])
  const [speed, setSpeed] = useState(600)
  const [count, setCount] = useState(1)
  const [running, setRunning] = useState(false)

  // async function startLoop() {
  //   let newArr = []
  //   for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index]
  //     newArr.push(element)
  //     await wait(speed)
  //     setResults(newArr)
  //   }
  // }

  useInterval(
    () => {
      if (running) {
        if (count !== arr.length + 1) {
          setCount(count + 1)
        }
        setResults((prev) => {
          return [...prev, prev.length !== 0 ? prev[prev.length - 1] + 1 : 1]
        })

        console.log('Hello')
      }
    },
    count !== arr.length + 1 ? speed : null
  )

  return (
    <div className="my-24">
      <div>
        [{' '}
        {results.map((item, index) => {
          const comma = index === arr.length - 1 ? ' ' : ', '
          return item + comma
        })}
        ]
      </div>
      <div className="flex w-40 flex-col">
        Speed: {speed}
        <input
          type="range"
          min={200}
          max={2000}
          step={200}
          value={speed}
          onChange={(event) => setSpeed(event.target.value)}
        />
      </div>
      <button onClick={() => setRunning(!running)}>Start Loop</button>

      <h4> Loop #: {results[results.length - 1]}</h4>
      <h4 className="mt-10">
        my_array = [{' '}
        {results.map((item, index) => {
          const comma = index === arr.length - 1 ? ' ' : ', '
          return item + comma
        })}
        ]
      </h4>
      <h4 className="mt-10">
        <span className="text-blue-400">for </span>
        {results[results.length - 1] || 'num'}
        <span className="text-blue-400"> for </span> [ 1, 2, 3, 4, 5 ]:
      </h4>
      <h4 className="ml-8">
        {' '}
        my_array.
        <span className="text-blue-400"> append(</span>
        {results[results.length - 1] || 'num'}
        <span className="text-blue-400">)</span>
      </h4>
    </div>
  )
}
