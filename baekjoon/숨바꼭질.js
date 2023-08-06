const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

if (N === K) {
  console.log(0);
  return;
}

const visited = Array(100_001).fill(false);
const queue = [[N, 0]];

while (queue.length) {
  const [cur, time] = queue.shift();

  if (cur === K) {
    console.log(time);
    break;
  }

  if (cur - 1 >= 0 && !visited[cur - 1]) {
    queue.push([cur - 1, time + 1]);
    visited[cur - 1] = true;
  }

  if (cur + 1 <= 100_000 && !visited[cur + 1]) {
    queue.push([cur + 1, time + 1]);
    visited[cur + 1] = true;
  }

  if (cur * 2 <= 100_000 && !visited[cur * 2]) {
    queue.push([cur * 2, time + 1]);
    visited[cur * 2] = true;
  }
}
