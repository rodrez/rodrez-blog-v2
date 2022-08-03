// import nightOwl from 'prism-react-renderer/themes/nightOwl'
// import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import { useTheme } from 'next-themes'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism'
import React, { useRef, useState } from 'react'

import { classNames } from '../../utils/general'
import darkTheme from '../../utils/mfuiSyntaxTheme'
import lightTheme from '../../utils/mfuiSyntaxThemeLight'
// ;(typeof global !== 'undefined' ? global : window).Prism = Prism
// require('prismjs/components/prism-rust')

const CodeSnippet = ({
  code,
  language,
  showLineNumbers = [],
  lineFocus = [],
  addedLines = [],
  removedLines = [],
  fileName = '',
}) => {
  const { resolvedTheme } = useTheme()
  const textInput = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const codeTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }
  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(code)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  // Highlight the line if the line number is in the lineFocus array
  const lineHighlight = (lineNumber) => {
    if (lineFocus.includes(lineNumber)) {
      return true
    }
    return false
  }

  // Check if a line was added or removed and highlight the line
  const lineAddedOrRemoved = (lineNumber) => {
    if (addedLines.includes(lineNumber)) {
      return 'bg-dark-green bg-opacity-30 border-l-4 border-dark-green'
    }

    if (removedLines.includes(lineNumber)) {
      return 'bg-dark-red bg-opacity-30 border-l-4 border-dark-green'
    }
  }

  return (
    <div className="py-2">
      <Highlight
        {...defaultProps}
        //   Dynamic theme
        theme={codeTheme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div
            onMouseEnter={onEnter}
            onMouseLeave={onExit}
            className={'relative flex flex-col text-lg'}
          >
            <div className="relative flex">
              {fileName && (
                <div
                  className={
                    'relative mt-4 w-full rounded-t-lg bg-slate-600 px-4 py-1 font-mono text-white dark:bg-slate-800'
                  }
                >
                  {fileName}
                </div>
              )}
            </div>

            <pre
              ref={textInput}
              className={classNames(
                className,
                fileName ? 'rounded-lg rounded-t-none' : 'rounded-xl',
                ' no-scrollbar relative mt-0 overflow-x-auto bg-white p-2 shadow-lg dark:bg-[#061626] dark:text-white'
              )}
              style={{
                marginTop: '0',
                wordBreak: 'break-word !important',
              }}
            >
              {hovered && (
                <button
                  aria-label="Copy code"
                  type="button"
                  className={`absolute right-2 top-2 h-8 w-8 rounded bg-gray-700 p-1 dark:bg-gray-800 ${
                    copied
                      ? 'border-green-400 focus:border-green-400 focus:outline-none'
                      : 'border-gray-300'
                  }`}
                  onClick={onCopy}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className={copied ? 'text-green-400' : 'text-gray-300'}
                  >
                    {copied ? (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </>
                    ) : (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </>
                    )}
                  </svg>
                </button>
              )}
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })
                return (
                  <div
                    key={index}
                    className={
                      `${lineProps.className} ${
                        lineHighlight(index + 1)
                          ? 'border-l-4 border-dark-green bg-[#061626] text-white dark:bg-gray-600 dark:bg-opacity-25'
                          : 'border-l-4 border-transparent hover:border-dark-green hover:bg-slate-200 hover:bg-opacity-50 dark:hover:bg-gray-600 dark:hover:bg-opacity-25'
                      }` + ` ${lineAddedOrRemoved(index + 1)}`
                    }
                  >
                    {showLineNumbers && (
                      <span className="text-dark-gray-text border-l-2 border-transparent pr-4">
                        {index + 1}
                      </span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        )}
      </Highlight>{' '}
    </div>
  )
}

export default CodeSnippet
