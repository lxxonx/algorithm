const fs = require("fs");
const [n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const fib = (_n) => {
  if (_n == 0) return 0;
  else if (_n <= 2) return 1;
  else return fib(_n - 2) + fib(_n - 1);
};

console.log(fib(n));
