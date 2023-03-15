const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

console.log(a + b);
