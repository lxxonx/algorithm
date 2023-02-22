// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = `2
1
3
2
3
`
  .split("\n")
  .map(Number);

const t = parseInt(input[0]);

for (let i = 1; i <= input.length && input[i] > 0; i += 2) {
  const k = parseInt(input[i]);
  const n = parseInt(input[i + 1]);
  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n]);
}
