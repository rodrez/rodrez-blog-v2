import kebabCase from '@libs/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text }) => {
  return (
    <Link
      className="mr-3 text-sm font-medium uppercase text-amber-500 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-500"
      href={`/tags/${kebabCase(text)}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
