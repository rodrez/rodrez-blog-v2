import Link from '@components/Link'
import PageTitle from '@components/PageTitle'
import SectionContainer from '@components/SectionContainer'
import { BlogSEO } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import formatDate from '@libs/utils/formatDate'

import TOC from '../components/TOC'

export default function PostLayout({ frontMatter, next, prev, children, toc }) {
  const { date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd
                    id={'published_on'}
                    className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                  >
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
                <div>
                  <dd
                    id={'reading_time'}
                    className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                  >
                    <span>{frontMatter.readingTime.text}</span>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="dark:prose-dark prose max-w-none pt-10 pb-8 prose-code:text-code  dark:prose-invert  dark:prose-pre:bg-[#00051D]">
                {children}
              </div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
      <TOC tableOfContents={toc} />
    </SectionContainer>
  )
}
