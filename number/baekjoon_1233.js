// const fs = require("fs");
// const [input] = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = "3 2 3";
const [s1, s2, s3] = input.split(" ").map(Number);

let sum = Array(s1 + s2 + s3 + 1).fill(0);
for (let i = 1; i <= s1; i++) {
  for (let j = 1; j <= s2; j++) {
    for (let k = 1; k <= s3; k++) {
      sum[i + j + k]++;
    }
  }
}

let max = 0;
let max_index = 0;
for (let i = 1; i <= sum.length; i++) {
  if (sum[i] > max) {
    max = sum[i];
    max_index = i;
  }
}

console.log(max_index);
