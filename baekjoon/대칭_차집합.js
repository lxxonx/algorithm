const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

const aSet = new Set(a);
const bSet = new Set(b);

const nS = new Set([...aSet].filter((x) => !bSet.has(x)));
const nS2 = new Set([...bSet].filter((x) => !aSet.has(x)));

console.log(nS2.size + nS.size);
