const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);

const matrix = Array.from({ length: n }, () => input.shift().split(" "));

const num = Number(input.shift());

for (let i = 0; i < num; i++) {
  const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
  let sum = 0;
  for (let j = x1 - 1; j < x2; j++) {
    for (let k = y1 - 1; k < y2; k++) {
      sum += Number(matrix[j][k]);
    }
  }
  console.log(sum);
}
