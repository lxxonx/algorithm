let [i] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
i = BigInt(i);

let divider = BigInt(20000303);

console.log((i % divider).toString());
