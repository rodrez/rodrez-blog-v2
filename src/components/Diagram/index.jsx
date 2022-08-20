import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams'
import React from 'react'

const CustomNode = (props) => {
  const { inputs } = props

  return (
    <div style={{ background: '#717EC3', borderRadius: '10px' }}>
      <div style={{ padding: '10px', color: 'white' }}>Custom Node</div>
    </div>
  )
}
// the diagram model
const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Node 1', coordinates: [50, 50] },
    { id: 'node-2', content: 'Node 2', coordinates: [50, 100] },
    { id: 'node-3', content: 'Node 3', coordinates: [150, 50] },
    { id: 'node-4', content: 'Node 4', coordinates: [150, 100] },
    {
      id: 'node-5',
      coordinates: [250, 50],
      render: CustomNode,
      inputs: [{ id: 'custom-port-1', alignment: 'left' }],
    },
  ],
  links: [
    { input: 'node-1', output: 'node-3' },
    { input: 'node-2', output: 'node-4' },
    { input: 'node-3', output: 'node-5' },
  ],
})

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema)

  return (
    <div style={{ height: '22.5rem' }}>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  )
}

export default UncontrolledDiagram
