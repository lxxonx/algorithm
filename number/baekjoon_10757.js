const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ");

const bigintA = BigInt(a);
const bigintB = BigInt(b);

console.log((bigintA + bigintB).toString());
