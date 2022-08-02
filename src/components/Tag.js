import Link from 'next/link'
import kebabCase from '@libs/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
