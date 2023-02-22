const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const hasEmpty = input.findIndex((v) => v === "");
if (hasEmpty !== -1) {
  input.splice(hasEmpty, 1);
}

let answer = "";
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += `${a + b}\n`;
}

console.log(answer);
