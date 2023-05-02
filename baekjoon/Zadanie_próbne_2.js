const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input) + 1;

console.log(num * 2, num * 3);
