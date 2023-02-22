// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const input = `1
10
13
100
1000
10000
100000
0`
  .trim()
  .split("\n")
  .map(Number);

const isPrimeNumber = (_num, _divisor) => {
  if (_num <= 2) return _num == 2 ? true : false;
  if (_num % _divisor == 0) return false;
  if (_divisor * _divisor > _num) return true;

  return isPrimeNumber(_num, _divisor + 1);
};

const countPrimeNumber = (_num) => {
  let count = 0;
  for (let i = _num + 1; i <= 2 * _num; i++) {
    if (isPrimeNumber(i, 2)) {
      count++;
    }
  }
  console.log(count);
};

let i = 0;
while (input[i] != 0) {
  countPrimeNumber(input[i]);
  i++;
}
