const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n").map(BigInt);

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());
