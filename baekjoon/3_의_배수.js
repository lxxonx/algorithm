let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

let count = 0;

while (input.length > 1) {
  const sum = input.reduce((acc, cur) => acc + cur);
  input = sum.toString().split("").map(Number);
  count++;
}
console.log(count);
console.log(input[0] % 3 === 0 ? "YES" : "NO");
