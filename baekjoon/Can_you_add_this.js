const fs = require("fs");
const [num, ...cases] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < num; i++) {
  const [a, b] = cases[i].split(" ").map(Number);
  console.log(a + b);
}
