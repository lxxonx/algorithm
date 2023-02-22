const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const answer = [];
for (let i = 0; i < 10; i++) {
  const result = input[i] % 42;
  if (answer.indexOf(result) === -1) {
    answer.push(result);
  }
}

console.log(answer.length);
