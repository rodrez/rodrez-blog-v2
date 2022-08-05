import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// SSR: false dynamic import
// 7 colors from green to red
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#FF0000', '#FF0000']

export default function ComplexityChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        stackOffset="expand"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area stackId={1} dataKey="O(1)" stroke={COLORS[0]} fill={COLORS[0]} />
        <Area stackId={1} dataKey="O(log n)" stroke={COLORS[1]} fill={COLORS[1]} />
        <Area stackId={1} dataKey="O(n)" stroke={COLORS[2]} fill={COLORS[2]} />
        <Area stackId={1} dataKey="O(n log n)" stroke={COLORS[3]} fill={COLORS[3]} />
        <Area stackId={1} dataKey="O(n²)" stroke={COLORS[4]} fill={COLORS[4]} />
        <Area stackId={1} dataKey="O(2^n)" stroke={COLORS[5]} fill={COLORS[5]} />
        <Area stackId={1} dataKey="O(n!)" stroke={COLORS[6]} fill={COLORS[6]} />
        <Label value="Elements" color="white" offset={0} position="insideBottom" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
