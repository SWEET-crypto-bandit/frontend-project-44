#!/usr/bin/env node

import start from '../index.js';

const util = 'What number is missing in the progression?';

const even = (question) => {
  const progression = question.split(' ');
  const hiddenIndex = progression.indexOf('..');
  const numbers = progression.map(Number).filter((n) => !Number.isNaN(n));
  const step = numbers[1] - numbers[0];
  
  let result;
  if (hiddenIndex === 0) {
    result = numbers[0] - step;
  } else {
    result = Number(progression[hiddenIndex - 1]) + step;
  }
  
  return String(result);
};

const toll = () => {
  const length = Math.floor(Math.random() * 11) + 5;
  const startNum = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startNum + i * step);
  }
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

export function calk4() {
  start(even, toll, util);
}


