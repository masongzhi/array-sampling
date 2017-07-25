/**
 * Created by masongzhi on 17-7-26.
 */
export const systematicSample = (array, k) => {
  if (!Array.isArray(array)) return console.info(`${array} is not a array`)
  if (!k || !Number.isInteger(k)) return console.info(`${k} is undefined or not a integer`)
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