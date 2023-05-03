const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

let result = "";
for (let i = input; i >= 1; i--) {
  result += "*".repeat(i) + "\n";
}

console.log(result);
