// 返回一个介于min和max之间的随机数
export function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}
// 返回一个介于min和max之间的整型随机数
// Using Math.round() will give you a non-uniform distribution!
export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  getRandomArbitrary,
  getRandomInt
}
