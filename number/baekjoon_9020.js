// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const input = `4
4
8
10
16`
  .trim()
  .split("\n")
  .map(Number);

const isPrimeNumber = (_num, _divisor) => {
  if (_num <= 2) return _num == 2 ? true : false;
  if (_num % _divisor == 0) return false;
  if (_divisor * _divisor > _num) return true;

  return isPrimeNumber(_num, _divisor + 1);
};

for (let i = 1; i <= input[0]; i++) {
  for (let j = 0; j < input[i] / 2; j++) {
    const smaller = input[i] / 2 - j;
    const bigger = input[i] / 2 + j;
    if (isPrimeNumber(smaller, 2) && isPrimeNumber(bigger, 2)) {
      console.log("%d %d", smaller, bigger);
      break;
    }
  }
}
