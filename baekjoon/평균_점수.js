const scores = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;

for (let score of scores) {
  if (score < 40) {
    score = 40;
  }

  sum += score;
}

console.log(sum / 5);
