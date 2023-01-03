import TimeComplexityFlow from '@components/TimeComplexityFlow'
import { arrayEdges, arrayTimeComplexity } from '@components/TimeComplexityFlow/complexity-data'
import { AiOutlineFolderView } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { HiThumbDown } from 'react-icons/hi'
import { MdDeleteForever } from 'react-icons/md'
import { TiChartLine } from 'react-icons/ti'
import { VscSymbolArray } from 'react-icons/vsc'

import Insert from '../components/icons/Insert'

export default function T() {
  const nodes = [
    {
      id: 'top',
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
      id: 'average',
      data: {
        label: 'Average',
        icon: <TiChartLine className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      type: 'custom',
      position: { x: -50, y: 120 },
    },
    {
      id: 'worst',
      data: {
        label: 'Worst',
        icon: <HiThumbDown className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      type: 'custom',
      position: { x: 512, y: 120 },
    },
    {
      id: 'average_access_time',
      data: {
        label: 'Access',
        icon: <AiOutlineFolderView className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: -240, y: 240 },
      type: 'custom',
    },
    {
      id: 'average_search_time',
      data: {
        label: 'Search',
        icon: <FaSearch className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: -120, y: 240 },
      type: 'custom',
    },
    {
      id: 'average_insertion_time',
      data: {
        label: 'Insertion',
        icon: <Insert />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: -8, y: 240 },
      type: 'custom',
    },
    {
      id: 'average_deletion_time',
      data: {
        label: 'Deletion',
        icon: <MdDeleteForever className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 121, y: 240 },
      type: 'custom',
    },
    {
      id: 'worst_access_time',
      data: {
        label: 'Access',
        icon: <AiOutlineFolderView className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 350, y: 240 },
      type: 'custom',
    },
    {
      id: 'worst_search_time',
      data: {
        label: 'Search',
        icon: <FaSearch className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 470, y: 240 },
      type: 'custom',
    },
    {
      id: 'worst_insertion_time',
      data: {
        label: 'Insertion',
        icon: <Insert />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 590, y: 240 },
      type: 'custom',
    },
    {
      id: 'worst_deletion_time',
      data: {
        label: 'Deletion',
        icon: <MdDeleteForever className="h-5 w-5 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      position: { x: 710, y: 240 },
      type: 'custom',
    },
    {
      id: 'worst',
      data: {
        label: 'Worst',
        icon: <HiThumbDown className="h-4 w-4 fill-amber-600" />,
        bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
      },
      type: 'custom',
      position: { x: 512, y: 120 },
    },
  ]
  const edges = [
    {
      id: 'top',
      source: 'top',
      target: 'worst',
      type: 'custom',
      data: {
        className: 'stroke-amber-600 stroke-2 fill-transparent',
      },
    },

    {
      id: 'top',
      source: 'top',
      target: 'average',
      type: 'custom',
    },
    {
      id: 'average',
      source: 'average',
      target: 'average_access_time',
      type: 'custom',
    },
    {
      id: 'average',
      source: 'average',
      target: 'average_search_time',
      type: 'custom',
    },
    {
      id: 'average',
      source: 'average',
      target: 'average_insertion_time',
      type: 'custom',
    },
    {
      id: 'average',
      source: 'average',
      target: 'average_deletion_time',
      type: 'custom',
    },
    {
      id: 'worst',
      source: 'worst',
      target: 'worst_access_time',
      type: 'custom',
      data: {
        className: 'stroke-amber-600 stroke-2 fill-transparent ',
      },
    },
    {
      id: 'worst',
      source: 'worst',
      target: 'worst_search_time',
      type: 'custom',
      data: {
        className: 'stroke-amber-600 stroke-2 fill-transparent ',
      },
    },
    {
      id: 'worst',
      source: 'worst',
      target: 'worst_insertion_time',
      type: 'custom',
      data: {
        className: 'stroke-amber-600 stroke-2 fill-transparent ',
      },
    },
    {
      id: 'worst',
      source: 'worst',
      target: 'worst_deletion_time',
      type: 'custom',
      data: {
        className: 'stroke-amber-600 stroke-2 fill-transparent ',
      },
    },
  ]
  return (
    <div className="h-[40vh] w-[70vw]">
      <TimeComplexityFlow
        initialNodes={[...nodes, ...arrayTimeComplexity]}
        initialEdges={[...edges, ...arrayEdges]}
      />
    </div>
  )
}
