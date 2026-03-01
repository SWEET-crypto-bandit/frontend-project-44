#!/usr/bin/env node
import start from '../index.js';
const util = "What is the result of the expression?";

const even = (n) => {
  const utog = eval(n);
  return `${utog}`;
};

const toll = () => {
  const one = Math.floor(Math.random() * 100);
  const two = Math.floor(Math.random() * 100);
  const res = Math.floor(Math.random() * 3 + 1);

  switch (res) {
    case 1:
      return `${one} + ${two}`;
    case 2:
      return `${one} - ${two}`;
    case 3:
      return `${one} * ${two}`;
    default:
      return `${one} + ${two}`;
  }
};

export function calk() {
  start(even, toll, util);
}
