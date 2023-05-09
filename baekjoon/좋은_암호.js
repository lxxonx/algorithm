const fs = require("fs");
const [k, l] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

for (let i = BigInt(2); i < l; i++) {
  if (k % i === 0n) {
    return console.log("BAD", i.toString());
  }
}

console.log("GOOD");
