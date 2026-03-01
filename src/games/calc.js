#!/usr/bin/env node
import start from '../index.js'
export function calk () {
const util = 'What is the result of the expression?'
const even = (n) => {
    let utog = eval(n)
return `${utog}`
}
function toll () {
const one = Math.floor(Math.random() * 100)
const two = Math.floor(Math.random() * 100)
const res = Math.floor(Math.random() * 3 + 1)
switch(res) {
    case 1:
        return `${one} + ${two}`   
    case 2:
        return `${one} - ${two}`   
    case 3:
        return `${one} * ${two}`   
}
}
start(even, toll, util)
}
