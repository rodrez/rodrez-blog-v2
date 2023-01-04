import 'reactflow/dist/base.css'

import Insert from '@components/icons/Insert'
import { useCallback } from 'react'
import { AiOutlineFolderView } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { TiChartLine } from 'react-icons/ti'
import ReactFlow, { addEdge, Background, useEdgesState, useNodesState } from 'reactflow'

import { arrayEdges, generateNodes } from './complexity-data'
import CustomEdge from './CustomEdge'
import CustomNode from './CustomNode'

const nodeTypes = {
  custom: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
}
const y = 100
const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance)
const initialNodes = [
  {
    id: 'average',
    data: {
      label: 'Average',
      icon: <TiChartLine className="h-4 w-4 fill-amber-600" />,
      start: true,
    },
    type: 'custom',
    position: { x: -50, y: 0 },
  },
  {
    id: 'average_access_time',
    data: {
      label: 'Access',
      icon: <AiOutlineFolderView className="h-5 w-5 fill-amber-600" />,
    },
    position: { x: -236, y: y },
    type: 'custom',
  },
  {
    id: 'average_search_time',
    data: {
      label: 'Search',
      icon: <FaSearch className="h-4 w-4 fill-amber-600" />,
    },
    position: { x: -112, y: y },
    type: 'custom',
  },
  {
    id: 'average_insertion_time',
    data: {
      label: 'Insertion',
      icon: <Insert />,
    },
    position: { x: 12, y: y },
    type: 'custom',
  },
  {
    id: 'average_deletion_time',
    data: {
      label: 'Deletion',
      icon: <MdDeleteForever className="h-5 w-5 fill-amber-600" />,
    },
    position: { x: 138, y: y },
    type: 'custom',
  },
]
const initialEdges = [
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

const TimeComplexityFlow = ({ access_time, search_time, insertion_time, deletion_time }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    ...initialNodes,
    ...generateNodes(access_time, search_time, insertion_time, deletion_time),
  ])
  const [edges, setEdges, onEdgesChange] = useEdgesState([...initialEdges, ...arrayEdges])
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle]
      edge.type = edgeType
    }

    return edge
  })

  const proOptions = { hideAttribution: true }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      proOptions={proOptions}
      nodesDraggable={false}
      zoomOnScroll={false}
      panOnDrag={false}
      onInit={onInit}
      fitView
      attributionPosition="bottom-left"
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
    >
      {/* <Background color="#aaa" gap={6} /> */}
      {/* <Controls /> */}
    </ReactFlow>
  )
}

export default TimeComplexityFlow
