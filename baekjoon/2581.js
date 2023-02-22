const fs = require("fs");
const [m, n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const isPrimeNumber = (num, divisor) => {
  if (num <= 2) return num == 2 ? true : false;
  if (num % divisor == 0) return false;
  if (divisor * divisor > num) return true;

  return isPrimeNumber(num, divisor + 1);
};

let answer = [];

for (let i = m; i <= n; i++) {
  if (isPrimeNumber(i, 2)) {
    answer.push(i);
  }
}

if (answer.length > 0) {
  console.log(answer.reduce((p, c) => p + c, 0));
  console.log(Math.min(...answer));
} else {
  console.log(-1);
}
