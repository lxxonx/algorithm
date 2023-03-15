const fs = require("fs");
let [N, r, c] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let result = 0;

while (N >= 1) {
  const half = 2 ** (N - 1);
  const size = 2 ** (N * 2 - 2);

  if (r < half && c < half) {
  }
  if (r < half && c >= half) {
    c -= half;
    result += size;
  }
  if (r >= half && c < half) {
    r -= half;
    result += size * 2;
  }
  if (r >= half && c >= half) {
    r -= half;
    c -= half;
    result += size * 3;
  }
  N--;
}

console.log(result);
