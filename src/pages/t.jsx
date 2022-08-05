import dynamic from 'next/dynamic'

const ComplexityChart = dynamic(() => import('@components/charts/ComplexityChart'), {
  ssr: false,
})

export default function T() {
  const data = [
    {
      name: '5 M',
      'O(1)': 0.001,
      'O(log n)': 0.001,
      'O(n)': 0.001,
      'O(n log n)': 0.001,
      'O(n^2)': 0.001,
      'O(2^n)': 0.001,
      'O(n!)': 0.9,
    },
    {
      name: '10 M',
      'O(1)': 0.02,
      'O(log n)': 0.1,
      'O(n)': 0.2,
      'O(n log n)': 0.5,
      'O(n^2)': 0.001,
      'O(2^n)': 0.001,
      'O(n!)': 0.001,
    },
  ]
  return (
    <div className="h-[40vh] w-[70vw]">
      <ComplexityChart data={data} />
    </div>
  )
}
