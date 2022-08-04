/* eslint-disable react/display-name */
import Indexing from '@components/algorithms/Indexing'
import BlogWarning from '@components/blogComponents/BlogWarning'
import CodeSnippet from '@components/blogComponents/CodeSnippet'
import CoolText from '@components/blogComponents/CoolText'
import HoverMe from '@components/blogComponents/HoverMe'
import BlogTable from '@components/blogComponents/Table'
import { slugify } from '@utils/general'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

// import { FaTwitter } from 'react-icons/fa'
// import { TwitterShareButton } from 'react-share'
// import DynamicTOC from '../blog/posts/DynamicTOC'
import Image from './Image'
import CustomLink from './Link'
import LinkedHeading from './LinkedHeading'
import { BlogNewsletterForm } from './NewsletterForm'
import PageTitle from './PageTitle'
import Pre from './Pre'
import TOCInline from './TOCInline'
export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
  PageTitle,
  CoolText,
  BlogWarning,
  HoverMe,
  BlogTable,
  Indexing,
  CodeSnippet,
  h1: ({ children }) => <LinkedHeading fontSize={'text-3xl'}>{children}</LinkedHeading>,
  h2: ({ children }) => <LinkedHeading fontSize={'text-2xl'}>{children}</LinkedHeading>,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
