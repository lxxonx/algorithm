const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [n, s] = input[i].trim().split(" ").map(Number);

  console.log(parseInt(s / (n + 1)));
}
