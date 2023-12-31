const identity = v => v
const join = (sep = '\n') => array => array.join(sep)
const split = (sep = ' ') => string => string.split(sep)
const inputs = (file = '/dev/stdin') => {
  const stream = require('fs').readFileSync(file, 'utf-8').trim()
  const toArray = sep => fn => iter => Array.from(split(sep)(iter), fn)
  return {
    readCols: (fn = identity) => toArray(' ')(fn)(stream),
    readRows: (fn = identity) => toArray('\n')(fn)(stream),
    readStream: (fn = identity) => fn(stream),
    readMatrix: (fn = identity) => toArray('\n')(identity)(stream)
      .map(toArray(' ')(fn))
  }
}

const outputs = v => {
  const _print = fn => v => console.log(fn(v))
  return {
    toLine: () => _print(identity)(v),
    toCols: () => _print(join(' '))(v),
    toRows: () => _print(join('\n'))(v),
    toJSON: () => _print(JSON.stringify)(v),
    toMatrix: () => _print(join('\n'))(v.map(join(' ')))
  }
}