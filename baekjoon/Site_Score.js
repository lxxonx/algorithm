const [a, b, c, d] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

// 56UR + 24TR + 14UO + 6TO

const ans = a * 56 + b * 24 + c * 14 + d * 6;

console.log(ans);
