import 'reactflow/dist/base.css'

import { useCallback } from 'react'
import ReactFlow, { addEdge, Background, Controls, useEdgesState, useNodesState } from 'reactflow'

import CustomEdge from './CustomEdge'
import CustomNode from './CustomNode'

const nodeTypes = {
  custom: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
}

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance)

const TimeComplexityFlow = ({ initialNodes, initialEdges }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
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

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="bottom-left"
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
    >
      <Background color="#aaa" gap={60} />
      <Controls />
    </ReactFlow>
  )
}

export default TimeComplexityFlow
