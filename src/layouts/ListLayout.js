import Link from '@components/Link'
import Pagination from '@components/Pagination'
import Tag from '@components/Tag'
import siteMetadata from '@data/siteMetadata'
import formatDate from '@libs/utils/formatDate'
import { classNames } from '@utils/general'
import { useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'

const BlogCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { slug, date, title, summary, tags } = post
  const style = useSpring({
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    boxShadow: isHovered ? '0px 0px 10px rgba(0, 0, 0, 0.5)' : '0px 0px 0px rgba(0, 0, 0, 0)',
  })

  return (
    <animated.li
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={slug}
      className=" h-full w-[20vw] rounded-md border-2 border-transparent bg-slate-200 p-6 hover:border-2 hover:border-blue-500 dark:bg-dark-background dark:hover:border-cyan-400"
    >
      <article className="flex flex-col space-y-2 xl:items-baseline xl:space-y-0">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3
              className={classNames(
                'text-2xl font-bold leading-8 tracking-tight',
                isHovered && 'text-blue-500 dark:text-cyan-400'
              )}
            >
              <Link href={`/blog/${slug}`} className="">
                {title}
              </Link>
            </h3>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:prose-invert dark:text-gray-400 dark:prose-pre:bg-[#00051D]">
            {summary}
          </div>
        </div>
      </article>
    </animated.li>
  )
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const transition = useTransition(displayPosts, {
    trail: 1000 / displayPosts.length,
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  })

  return (
    <>
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
              {title}
            </h1>

            <div className="relative w-[32rem] ">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <ul className="mx-auto mt-6 flex flex-wrap justify-center gap-4">
          {/* {displayPosts.map((frontMatter) => {
            return <BlogCard key={frontMatter.slug} post={frontMatter} />
          })} */}
          {!filteredBlogPosts.length && 'No posts found.'}
          {transition((style, post) => (
            <animated.div style={style} key={post.slug}>
              <BlogCard post={post} />
            </animated.div>
          ))}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
