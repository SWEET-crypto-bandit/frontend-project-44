#!/usr/bin/env node

import start from '../src/index.js'

const util = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const even = (question) => {
  const num = Number(question)
  if (num < 2) return 'no'
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no'
  }
  return 'yes'
}

const toll = () => {
  const num = Math.floor(Math.random() * 100) + 1
  return String(num)
}

start(even, toll, util)