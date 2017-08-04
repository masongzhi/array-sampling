const mathUtil = require('/util/math_util')
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
export const systematicSample = (array, k) => {
  let gutter
  if (!Array.isArray(array)) return console.error(`${array} is not a array`)
  if (k && Number.isInteger(k)) {
    gutter = Math.floor(array.length / k)
  }
  let count = 0
  const result = array.filter((it, index) => {
    if (index >= count) {
      count += gutter
      return it
    }
  })
  return result
}

export const simpleRandomSampling = (array, k, {type = 'repeat'}) => {
  if (!Array.isArray(array)) return console.error(`${array} is not a array`)
  if (!k || !Number.isInteger(k)) return console.error(`${k} is undefined or not a integer`)
  let numbers = []
  switch (type) {
    case 'repeat':
      for (let n in k) {
        numbers.push(mathUtil.getRandomInt(0, array.length))
      }
      break
    case 'noRepeat':
      for (let n in k) {
        numbers.push(mathUtil.getRandomInt(0, array.length))
      }
      break
  }
  return numbers.map(index => {
    return array[index]
  })
}

export default {
  systematicSample,
  simpleRandomSampling
}
