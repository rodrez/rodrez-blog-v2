import TimeComplexityFlow from '@components/TimeComplexityFlow'
import { FaClock } from 'react-icons/fa'
import { MdMemory } from 'react-icons/md'
import { VscSymbolArray } from 'react-icons/vsc'

export default function T() {
  const nodes = [
    {
      id: '1',
      data: {
        label: 'Array',
        icon: <VscSymbolArray className="h-4 w-4 stroke-2 text-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
        start: true,
      },
      position: { x: 250, y: 0 },
      type: 'custom',
    },
    {
      id: '2',
      data: {
        label: 'Time Complexity',
        icon: <FaClock className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      type: 'custom',
      position: { x: 100, y: 100 },
    },
    {
      id: '3',
      data: {
        label: 'Space Complexity',
        icon: <MdMemory className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 400, y: 100 },
      type: 'custom',
    },
    {
      id: '4',
      data: {
        label: 'Access',
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: -200, y: 200 },
      type: 'custom',
    },
    {
      id: '5',
      data: {
        label: 'Search',
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 0, y: 200 },
      type: 'custom',
    },
    {
      id: '6',
      data: {
        label: 'Insertion',
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 200, y: 200 },
      type: 'custom',
    },
    {
      id: '7',
      data: {
        label: 'Deletion',
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 400, y: 200 },
      type: 'custom',
    },
  ]
  const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e2-4', source: '2', target: '4' },
    { id: 'e2-5', source: '2', target: '5' },
    { id: 'e2-6', source: '2', target: '6' },
    { id: 'e2-7', source: '2', target: '7' },
  ]
  return (
    <div className="h-[40vh] w-[70vw]">
      <TimeComplexityFlow initialNodes={nodes} initialEdges={edges} />
    </div>
  )
}
