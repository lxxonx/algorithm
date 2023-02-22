const fs = require("fs");
const [n] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let i = n;
let answer = "";
while (i >= 1) {
  answer += i + "\n";
  i--;
}

console.log(answer);
