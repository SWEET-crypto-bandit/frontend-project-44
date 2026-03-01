#!/usr/bin/env node
import start from '../index.js'
const util = 'Find the greatest common divisor of given numbers.'
const toll = () => {
  const one = Math.floor(Math.random() * 100) + 1 // числа от 1 до 100
  const two = Math.floor(Math.random() * 100) + 1
  return `${one} ${two}`
}

const even = (question) => {
  const [a, b] = question.split(" ").map(Number)
  const gcd = (x, y) => {
    while (y !== 0) {
      const temp = y
      y = x % y
      x = temp
    }
    return x
  }
  return `${gcd(a, b)}`
}

export function calk2() {
  start(even, toll, util)
}
