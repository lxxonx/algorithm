const [l, a, b, c, d] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const korean = Math.ceil(a / c);
const math = Math.ceil(b / d);

console.log(l - Math.max(korean, math));
