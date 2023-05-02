const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = Array(30)
  .fill(0)
  .map((_, i) => i + 1);

for (let i = 0; i < input.length; i++) {
  arr = arr.filter((v) => v !== input[i]);
}

console.log(arr[0]);
console.log(arr[1]);
