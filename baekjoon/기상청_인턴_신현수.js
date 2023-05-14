const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = a.split(" ").map(Number);
const arr = b.split(" ").map(Number);

let max = -Infinity;

for (let i = 0; i < N - (K - 1); i++) {
  const sum = arr.slice(i, i + K).reduce((acc, cur) => acc + cur, 0);
  if (sum > max) {
    max = sum;
  }
}

console.log(max);
