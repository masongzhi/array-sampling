/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
export const systematicSample = (array, k) => {
  if (!Array.isArray(array)) return console.warn(`${array} is not a array`)
  if (!k || !Number.isInteger(k)) return console.warn(`${k} is undefined or not a integer`)
  let count = 0
  const result = array.filter((it, index) => {
    if (index >= count) {
      count += k
      return it
    }
  })
  return result
}

export default { systematicSample }
