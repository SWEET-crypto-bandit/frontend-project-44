#!/usr/bin/env node
import start from "../index.js";
export function calk4() {
  const util = "What number is missing in the progression?";
  const even = (question) => {
    const progression = question.split(" ");
    const hiddenIndex = progression.indexOf("..");
    const findStep = (arr) => {
      const nums = arr.map(Number).filter((n) => !Number.isNaN(n));
      return nums[1] - nums[0];
    };
    const step = findStep(progression);
    const findStart = (arr, step) => {
      const nums = arr.map(Number).filter((n) => !Number.isNaN(n));
      return nums[0] - nums.indexOf(Number(nums[0])) * step;
    };
    const start = findStart(progression, step);
    const result = start + hiddenIndex * step;
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
    progression[hiddenIndex] = "..";
    return progression.join(" ");
  };
  start(even, toll, util);
}
