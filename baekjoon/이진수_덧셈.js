const [, ...binaries] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let binary of binaries) {
  const [a, b] = binary.split(" ").map((str) => BigInt("0b" + str));
  const sum = a + b;
  const result = sum.toString(2);
  console.log(result);
}
