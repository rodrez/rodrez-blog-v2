/* eslint-disable react/display-name */
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import Image from './Image'
import CustomLink from './Link'
import { BlogNewsletterForm } from './NewsletterForm'
import PageTitle from './PageTitle'
import Pre from './Pre'
import TOCInline from './TOCInline'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  PageTitle: PageTitle,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
