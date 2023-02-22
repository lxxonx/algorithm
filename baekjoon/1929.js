const fs = require("fs");
const [m, n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isPrimeNumber = (num, divisor) => {
  if (num <= 2) return num == 2 ? true : false;
  if (num % divisor == 0) return false;
  if (divisor * divisor > num) return true;

  return isPrimeNumber(num, divisor + 1);
};

for (let i = m; i <= n; i++) {
  if (isPrimeNumber(i, 2)) {
    console.log(i);
  }
}
