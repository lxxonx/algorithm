const fs = require("fs");
let num = +fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
while (num >= 5) {
  count += parseInt(num / 5);
  num /= 5;
}

console.log(count);
