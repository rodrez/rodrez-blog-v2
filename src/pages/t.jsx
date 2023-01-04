import TimeComplexityFlow from '@components/TimeComplexityFlow'
import { arrayEdges, generateNodes } from '@components/TimeComplexityFlow/complexity-data'
import { AiOutlineFolderView } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { TiChartLine } from 'react-icons/ti'

import Insert from '../components/icons/Insert'

export default function T() {
  const nodes = [
    {
      id: 'average',
      data: {
        label: 'Average',
        icon: <TiChartLine className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
        start: true,
      },
      type: 'custom',
      position: { x: -50, y: 120 },
    },
    {
      id: 'average_access_time',
      data: {
        label: 'Access',
        icon: <AiOutlineFolderView className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: -217, y: 210 },
      type: 'custom',
    },
    {
      id: 'average_search_time',
      data: {
        label: 'Search',
        icon: <FaSearch className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: -100, y: 210 },
      type: 'custom',
    },
    {
      id: 'average_insertion_time',
      data: {
        label: 'Insertion',
        icon: <Insert />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 13, y: 210 },
      type: 'custom',
    },
    {
      id: 'average_deletion_time',
      data: {
        label: 'Deletion',
        icon: <MdDeleteForever className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 145, y: 210 },
      type: 'custom',
    },
  ]
  const edges = [
    {
      id: 'top',
      source: 'top',
      target: 'average',
      type: 'custom',
    },
    {
      id: 'average_access',
      source: 'average',
      target: 'average_access_time',
      type: 'custom',
    },
    {
      id: 'average_search',
      source: 'average',
      target: 'average_search_time',
      type: 'custom',
    },
    {
      id: 'average_insertion',
      source: 'average',
      target: 'average_insertion_time',
      type: 'custom',
    },
    {
      id: 'average_deletion',
      source: 'average',
      target: 'average_deletion_time',
      type: 'custom',
    },
  ]

  return (
    <div className="h-[30vh] w-[70vw]">
      <TimeComplexityFlow
        access_time="O(1)"
        search_time="O(n)"
        insertion_time="O(n)"
        deletion_time="O(n)"
      />
    </div>
  )
}
