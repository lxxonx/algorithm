const fs = require("fs");
const [n] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let answer = "";
for (let i = 1; i <= n; i++) {
  answer += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
console.log(answer);
