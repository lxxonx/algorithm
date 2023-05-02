const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].trim().split(" ").map(Number);
  if (a > b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
