const [input, ...edges] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);

if (n === 1) {
  console.log(1);
  return;
}

const graph = Array(n + 1)
  .fill(0)
  .map(() => []);

for (let edge of edges) {
  const [a, b] = edge.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(false);
let count = 0;

const dfs = (node) => {
  visited[node] = true;

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);
