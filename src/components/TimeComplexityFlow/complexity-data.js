const arrayTimeComplexity = [
  {
    id: 'average_access_time_complexity',
    data: {
      label: 'O(1)',
      bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
    },
    type: 'custom',
    position: { x: -217, y: 320 },
  },
  {
    id: 'average_search_time_complexity',
    data: {
      label: 'O(n)',
      bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
    },
    position: { x: -99, y: 320 },
    type: 'custom',
  },
  {
    id: 'average_insertion_time_complexity',
    data: {
      label: 'O(n)',
      bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
    },
    position: { x: 23, y: 320 },
    type: 'custom',
  },
  {
    id: 'average_deletion_time_complexity',
    data: {
      label: 'O(n)',
      bgClass: 'flex items-center rounded bg-dark-background px-3 py-2',
    },
    position: { x: 149, y: 320 },
    type: 'custom',
  },
]

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

export { arrayEdges, arrayTimeComplexity }
