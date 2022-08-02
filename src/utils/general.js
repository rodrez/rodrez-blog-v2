const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const classNames = (...args) => args.filter(Boolean).join(' ')

export { classNames, wrap }
