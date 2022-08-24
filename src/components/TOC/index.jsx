import clsx from 'clsx'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export default function TOC({ tableOfContents }) {
  let currentSection = useTableOfContents(tableOfContents)
  function isActive(section) {
    if (section.url === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  const scrollTo = (id, offset = 100) => {
    const title = document.getElementById(id)
    console.log(title?.offsetTop)
    window.scrollTo({
      top: title?.offsetTop + offset,
      behavior: 'smooth',
    })
  }

  return (
    <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-24 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {tableOfContents.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className=" text-sm font-medium text-slate-900 dark:text-white"
            >
              On this page
            </h2>
            <ol className="mt-4 space-y-3 text-sm">
              {tableOfContents.map((section) => (
                <li key={section.id}>
                  <button
                    // href={section.url}
                    onClick={() => scrollTo(section.url.slice(1))}
                    className={clsx(
                      isActive(section)
                        ? 'text-sky-500'
                        : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                    )}
                  >
                    {section.value}
                  </button>
                  {/* {section.children?.length > 0 && (
                    <ol className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                      {section.children.map((subSection) => (
                        <li key={subSection.id}>
                          <Link
                            href={`#${subSection.id}`}
                            className={
                              isActive(subSection) ? "text-sky-500" : "hover:text-slate-600 dark:hover:text-slate-300"
                            }
                          >
                            {subSection.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  )} */}
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.url)
  let getHeadings = useCallback((tableOfContents) => {
    return (
      tableOfContents
        // .flatMap((node) => [node.id, ...node.children?.map((child) => child.id)])
        .map((heading) => {
          let el = document.getElementById(heading.url.slice(1))
          if (!el) return

          let style = window.getComputedStyle(el)
          let scrollMt = parseFloat(style.scrollMarginTop)

          let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
          let id = heading.url
          return { id, top }
        })
    )
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0]?.id
      for (let heading of headings) {
        if (top >= heading?.top) {
          current = heading?.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}
