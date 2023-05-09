let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

a = b - a;

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const g = gcd(a, b);

console.log(a / g, b / g);
