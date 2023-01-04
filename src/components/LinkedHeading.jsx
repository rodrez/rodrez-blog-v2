import { classNames, slugify } from '@utils/general'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaLink } from 'react-icons/fa'

const LinkedHeading = ({ children, fontSize }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [url, setUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const anchor = slugify(children)
  const link = `#${anchor}`
  const router = useRouter()

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(url)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  useEffect(() => {
    const mainUrl = window.location.host + window.location.pathname + router.basePath
    const fullUrl = `${mainUrl}#${anchor}`
    setUrl(fullUrl.replace('object-object', ''))
  }, [anchor, router.basePath])

  return (
    <h2
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className={'relative flex items-center text-blue-500 dark:text-violet-400'}
      id={anchor.replace('object-object', '')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <a
          href={link.replace('object-object', '')}
          onClick={() => onCopy()}
          className={classNames(
            'absolute top-1/2 -left-6 -translate-y-1/2',
            fontSize,
            copied ? 'text-lime-500' : 'text-amber-600 dark:text-amber-400'
          )}
        >
          <FaLink className="mr-2 text-xl" />
        </a>
      )}
      <span className="text-primary-600 dark:text-primary-400">{children}</span>
    </h2>
  )
}
export default LinkedHeading
