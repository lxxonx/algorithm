const [n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = "SciComLove\n".repeat(n).trim();

console.log(res);
