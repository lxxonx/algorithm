const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(+a * b[2]);
console.log(+a * b[1]);
console.log(+a * b[0]);
console.log(+a * +b);
