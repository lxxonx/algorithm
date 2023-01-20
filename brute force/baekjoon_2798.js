// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const text = `
10 500
93 181 245 214 315 36 185 138 216 295`;

const input = text.toString().trim().split("\n");

const [n, m] = input[0].trim().split(" ").map(Number);
const cards = input[1].trim().split(" ").map(Number);

let answer = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= m) {
        answer = Math.max(sum, answer);
      }
    }
  }
}

console.log(answer);
