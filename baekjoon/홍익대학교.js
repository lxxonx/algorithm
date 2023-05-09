let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = parseInt(input);

const res = input - 1946;

console.log(res);
