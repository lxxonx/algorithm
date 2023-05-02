const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i] * input[i];
}

const sum = input.reduce((acc, cur) => acc + cur, 0);

console.log(sum % 10);
