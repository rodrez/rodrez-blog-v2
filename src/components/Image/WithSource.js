import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ size, creditTo = null, ...rest }) =>
  size ? (
    <div>
      <NextImage {...rest} height={size} width={size} />
      {creditTo && <p className="text-xs">{creditTo}</p>}
    </div>
  ) : (
    <div>
      <NextImage {...rest} />
      {creditTo && <p className="text-xs">{creditTo}</p>}
    </div>
  )

export default Image
