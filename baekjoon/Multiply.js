let [_, a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

a = BigInt(a);
b = BigInt(b);

console.log((a * b).toString());
