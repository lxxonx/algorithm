// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

const input = `4 5 1
1 2
1 3
1 4
2 4
3 4`;

const lines = input.split("\n");
const [N, M, V] = lines[0].split(" ").map(Number);

let path = new Array(N + 1).fill().map((_) => []);

for (let i = 0; i < M; i++) {
  const [a, b] = lines[i + 1].split(" ").map(Number);
  path[a].push(b);
  path[b].push(a);
}
path = [...path.map((e) => e.sort((a, b) => a - b))];

console.log(path);
const dfsSol = (v) => {
  const visited = new Array(N + 1).fill(false);
  const result = [];

  const dfs = (starting) => {
    if (visited[starting]) {
      return;
    }

    visited[starting] = true;
    result.push(starting);
    path[starting].forEach((vertex) => {
      if (!visited[vertex]) {
        dfs(vertex);
      }
    });
  };
  dfs(v);
  return result;
};

const bfsSol = (v) => {
  const visited = new Array(N + 1).fill(false);
  const result = [];
  const queue = [v];
  visited[v] = true;
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    path[current].forEach((vertex) => {
      if (!visited[vertex]) {
        visited[vertex] = true;
        queue.push(vertex);
      }
    });
  }
  return result;
};

console.log(dfsSol(V).join(" "));
console.log(bfsSol(V).join(" "));
