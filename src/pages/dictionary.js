import { dictionary } from '@data/dictionary'
import { useState } from 'react'

const items = Object.keys(dictionary)

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState(items)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchResults = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setResults(searchResults)
  }

  const underToSpace = (str) => {
    return str.replaceAll('_', ' ')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
      </form>
      <ul>
        {results.map((item, index) => (
          <li key={index} className="my-2">
            <p className="text-primary-400">{underToSpace(item)}:</p>
            <p>{dictionary[item]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
