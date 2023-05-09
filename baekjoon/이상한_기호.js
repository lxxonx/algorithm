const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const atOperator = (a, b) => {
  return (a + b) * (a - b);
};

console.log(atOperator(a, b).toString());
