const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const result = input.sort((a, b) => a - b);

console.log(result.join(" "));
