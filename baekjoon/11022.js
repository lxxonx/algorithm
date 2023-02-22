const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += `Case #${i}: ${a} + ${b} = ${a + b}\n`;
}

console.log(answer);
