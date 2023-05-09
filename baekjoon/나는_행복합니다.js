const [N, M, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i * M + j === K) {
      console.log(i, j);
    }
  }
}
