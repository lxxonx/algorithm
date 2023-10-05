const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

//N := ⌊(n1 + 1)(n2 + 1)/(n12 + 1) - 1⌋

const ans = Math.floor(((a + 1) * (b + 1)) / (c + 1) - 1);

console.log(ans);
