const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

const k = (a + b) / BigInt(2);
const n = k - b;

console.log(k.toString());
console.log(n.toString());
