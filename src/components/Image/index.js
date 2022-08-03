import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ size, ...rest }) =>
  size ? <NextImage {...rest} height={size} width={size} /> : <NextImage {...rest} />

export default Image
