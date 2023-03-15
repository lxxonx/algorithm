const fs = require("fs");
const [input, nums, target] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const length = Number(input);
const arr = nums.split(" ").map(Number);
const targetNum = Number(target);

let count = 0;

for (let i = 0; i < length; i++) {
  if (arr[i] === targetNum) count++;
}

console.log(count);
