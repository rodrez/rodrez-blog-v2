const generateNodes = (access_time, search_time, insertion_time, deletion_time) => {
  const labelClass = {}
  const y = 170
  return [
    {
      id: 'average_access_time_complexity',
      data: {
        label: access_time,
        labelClass: '',
        last: true,
      },
      type: 'custom',
      position: { x: -236, y: y },
    },
    {
      id: 'average_search_time_complexity',
      data: {
        label: search_time,
        labelClass: '',
        last: true,
      },
      position: { x: -112, y: y },
      type: 'custom',
    },
    {
      id: 'average_insertion_time_complexity',
      data: {
        label: insertion_time,
        labelClass: '',
        last: true,
      },
      position: { x: 12, y: y },
      type: 'custom',
    },
    {
      id: 'average_deletion_time_complexity',
      data: {
        label: deletion_time,
        labelClass: '',
        last: true,
      },
      position: { x: 138, y: y },
      type: 'custom',
    },
  ]
}

const arrayEdges = [
  {
    id: 'average_edge_access',
    source: 'average_access_time',
    target: 'average_access_time_complexity',
    type: 'custom',
    data: {
      line: 'straight',
    },
  },
  {
    id: 'average_edge_search',
    source: 'average_search_time',
    target: 'average_search_time_complexity',
    type: 'custom',
    data: { line: 'straight' },
  },
  {
    id: 'average_edge_insertion',
    source: 'average_insertion_time',
    target: 'average_insertion_time_complexity',
    type: 'custom',
    data: {
      line: 'straight',
    },
  },
  {
    id: 'average_edge_deletion',
    source: 'average_deletion_time',
    target: 'average_deletion_time_complexity',
    type: 'custom',
    data: {
      line: 'straight',
    },
  },
]
export { arrayEdges, generateNodes }
