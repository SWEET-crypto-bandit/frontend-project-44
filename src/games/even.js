#!/usr/bin/env node
import start from '../index.js'
export function calk1 () {
const util = 'Answer "yes" if the number is even, otherwise answer "no".'
let i = 0
const even = (n) => {
return n % 2 === 0 ? 'yes' : 'no'
}
function toll () {return Math.floor(Math.random() * 100)}// Рандом от 1 до 100
start(even, toll, util)
}