const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const right = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) {
  right[i] = right[i] - input[i];
}

console.log(right.join(" "));
