import clsx from 'clsx'
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

const CustomNode = ({ data, yPos, xPos }) => {
  return (
    <>
      {!data?.start && <Handle type="target" position={Position.Top} />}
      <div className="relative">
        <div className={data?.bgClass}>
          {data.icon && data?.icon}
          {/* {yPos && xPos && ( */}
          {/*   <p className="absolute top-0 right-0 text-xs text-gray-400"> */}
          {/*     {Math.round(xPos).toFixed(2)}, {Math.round(yPos).toFixed(2)} */}
          {/*   </p> */}
          {/* )} */}
          <p className={data.labelClass}>
            <span className={clsx(data.icon && 'ml-3', 'text-xs')}>{data.label}</span>
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
