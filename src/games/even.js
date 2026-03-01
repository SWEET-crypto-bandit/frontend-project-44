#!/usr/bin/env node
import start from '../index.js'

const util = 'Answer "yes" if the number is even, otherwise answer "no".';


const toll = () => {
  return Math.floor(Math.random() * 100);
};

const even = (n) => {
  return n % 2 === 0 ? 'yes' : 'no';
};

export function calk1() {
  start(even, toll, util);
}

