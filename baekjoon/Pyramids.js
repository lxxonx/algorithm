const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  const n = input[i];
  let result = 0;

  for (let j = 1; j <= n; j++) {
    result += j;
  }

  console.log(result);
}
