let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = input.split("").map(Number);

for (let i = input.length - 1; i > 0; i--) {
  if (input[i] >= 5) {
    input[i - 1]++;
  }
  input[i] = 0;
}

console.log(input.join(""));
