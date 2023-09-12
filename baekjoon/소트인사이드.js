const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

input.sort((a, b) => {
  return b.localeCompare(a);
});

console.log(input.join(""));
