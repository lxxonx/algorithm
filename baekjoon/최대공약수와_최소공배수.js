const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(gcd(a, b));
console.log(lcm(a, b));
