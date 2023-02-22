const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let answer = "";
for (let i = 0; i < input.length - 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += `${a + b}${i === input.length - 1 ? "" : "\n"}`;
}

console.log(answer);
