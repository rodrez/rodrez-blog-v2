import { memo } from 'react'
import { Handle, Position } from 'reactflow'

const sourceHandleStyleA = {
  width: '24px',
  height: '12px',
  borderRadius: '3px',
  border: 'none',
  marginTop: '4px',
  backgroundColor: '#1B59F7',
}
// const sourceHandleStyleB = {
//   right: 50,
//   left: 'auto',
// }

const CustomNode = ({ data }) => {
  return (
    <>
      {!data?.start && <Handle type="target" position={Position.Top} />}
      <div>
        <div className={data?.bgClass}>
          {data?.icon}
          <p className={data.labelClass}>
            <strong className="ml-3">{data.label}</strong>
          </p>
        </div>
      </div>

      <Handle
        type="source"
        className="mt-1"
        position={Position.Bottom}
        id="a"
        style={sourceHandleStyleA}
      />
      {/* <Handle type="source" position={Position.Bottom} id="b" style={sourceHandleStyleB} /> */}
    </>
  )
}

export default memo(CustomNode)
