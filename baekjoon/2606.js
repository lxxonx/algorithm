// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;

const lines = input.split("\n");
const N = +lines[0].trim();
const M = +lines[1].trim();

const path = new Array(N + 1).fill().map((_) => []);

for (let i = 0; i < M; i++) {
  const [a, b] = lines[i + 2].split(" ").map(Number);
  path[a].push(b);
  path[b].push(a);
}

const solution = (v) => {
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
console.log(solution(1).length - 1);
