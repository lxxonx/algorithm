// const fs = require("fs");
// const [n, nums] = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = 6;
const numbers = "1 3 5 7 9 61".split(" ").map(Number);

const isPrimeNumber = (num, divisor) => {
  if (num <= 2) return num == 2 ? true : false;
  if (num % divisor == 0) return false;
  if (divisor * divisor > num) return true;

  return isPrimeNumber(num, divisor + 1);
};

let answer = 0;

for (let i = 0; i < n; i++) {
  if (isPrimeNumber(numbers[i], 2)) {
    answer++;
  }
}
console.log(answer);
