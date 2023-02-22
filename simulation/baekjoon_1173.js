const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const input = "200 50 200 150 1".split(" ").map(Number);

const [N, m, M, T, R] = input;

const solution = () => {
  let count = 0;
  let current = m;

  if (m + T > M) return -1;

  let time = 0;

  for (; count < N; time++) {
    if (current + T <= M) {
      current += T;
      count++;
    } else if (current - R >= m) {
      current -= R;
    } else {
      current = m;
    }
  }

  return time;
};

console.log(solution());
