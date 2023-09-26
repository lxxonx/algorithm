const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = BigInt(input);

let factorial = 1n;

for (let i = 2n; i <= num; i++) {
  factorial *= i;
}

console.log(factorial.toString());
