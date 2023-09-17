const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [x1, y1] = input[0].split(" ").map(Number);
const a1 = Array.from({ length: x1 });
for (let i = 0; i < x1; i++) {
  a1[i] = input[i + 1].split(" ").map(Number);
}

const [x2, y2] = input[1 + x1].split(" ").map(Number);
const a2 = Array.from({ length: x2 });
for (let i = 0; i < x2; i++) {
  a2[i] = input[i + 2 + x1].split(" ").map(Number);
}

const res = Array.from({ length: x1 }, () =>
  Array.from({ length: y2 }, () => 0)
);

let ans = "";

for (let i = 0; i < x1; i++) {
  for (let j = 0; j < y2; j++) {
    for (let k = 0; k < y1; k++) {
      res[i][j] += a1[i][k] * a2[k][j];
    }
    ans += res[i][j] + " ";
  }

  ans += "\n";
}

console.log(ans);
