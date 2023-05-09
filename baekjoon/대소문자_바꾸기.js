const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    input[i] = input[i].toLowerCase();
  } else {
    input[i] = input[i].toUpperCase();
  }
}
console.log(input.join(""));
