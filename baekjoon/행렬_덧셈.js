const fs = require("fs");
const [size, ...matrixes] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const [N, M] = size.split(" ").map(Number);

for (let i = 0; i < N; i++) {
  const a = matrixes[i].split(" ").map(Number);
  const b = matrixes[i + N].split(" ").map(Number);

  const sumArr = [];

  for (let j = 0; j < M; j++) {
    const sum = a[j] + b[j];
    sumArr.push(sum);
  }
  console.log(sumArr.join(" "));
}
