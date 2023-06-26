let [n, stones, location] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

n = +n;
stones = stones.split(" ").map(Number);
const [start, end] = location.split(" ").map(Number);

const queue = [start];
const visited = Array(n + 1).fill(0);
while (queue.length) {
  const current = queue.shift();
  for (
    let i = current + stones[current - 1];
    i <= n;
    i += stones[current - 1]
  ) {
    if (i === end) {
      console.log(visited[current - 1] + 1);
      return;
    }
    if (visited[i - 1]) continue;
    queue.push(i);
    visited[i - 1] = visited[current - 1] + 1;
  }

  for (
    let i = current - stones[current - 1];
    i >= 1;
    i -= stones[current - 1]
  ) {
    if (i === end) {
      console.log(visited[current - 1] + 1);
      return;
    }
    if (visited[i - 1]) continue;
    queue.push(i);
    visited[i - 1] = visited[current - 1] + 1;
  }
}

console.log(-1);
