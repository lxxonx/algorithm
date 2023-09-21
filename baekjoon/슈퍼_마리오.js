const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const diff100 = (num) => {
  return Math.abs(100 - num);
};

let sum = 0;

for (let num of input) {
  if (diff100(sum) < diff100(sum + num)) {
    console.log(sum);
    return;
  }
  sum += num;
}

console.log(sum);
