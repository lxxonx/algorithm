const fs = require("fs");
const [n, a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = Array.from({ length: n }, (_) =>
  Array.from({ length: n }, (_) => ".")
);

const mid = parseInt(n / 2);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const ab = Math.abs(i - mid) + Math.abs(j - mid);
    if (ab >= a && ab <= b) {
      arr[i][j] = "*";
    }
  }
}

const na = arr.reduce((acc, cur) => acc + cur.join("") + "\n", "");

console.log(na);
