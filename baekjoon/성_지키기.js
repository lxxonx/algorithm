const [size, ...castle] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = size.split(" ").map(Number);

const map = castle.map((v) => v.split(""));

const row = Array(N).fill(false);
const col = Array(M).fill(false);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "X") {
      row[i] = true;
      col[j] = true;
    }
  }
}

console.log(
  Math.max(row.filter((v) => !v).length, col.filter((v) => !v).length)
);
