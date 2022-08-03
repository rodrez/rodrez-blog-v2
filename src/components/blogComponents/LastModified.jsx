import React from 'react'

export default function LastModified(props) {
  const [lastModified, setLastModified] = React.useState(null)

  React.useEffect(() => {
    const mod = () => {
      var modiDate = new Date(document.lastModified)
      var showAs = modiDate.getMonth() + 1 + '-' + modiDate.getDate() + '-' + modiDate.getFullYear()
      return showAs
    }
    setLastModified(mod())
  }, [])

  return (
    <div>
      <p>Last Updated: {lastModified}</p>
    </div>
  )
}
