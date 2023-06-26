let n = require("fs").readFileSync("/dev/stdin").toString().trim();
n = +n;

let a = 1;
let b = 0;

for (let i = 0; i < n; i++) {
  let temp = a;
  a = b;
  b = temp + b;
}

console.log(a, b);
