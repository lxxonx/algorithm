const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(max * min);
