const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}

console.log(answer);
