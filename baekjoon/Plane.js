const fs = require("fs");
const num = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(num[0] * num[1] + num[2] * num[3]);
