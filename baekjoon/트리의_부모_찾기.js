let [input, ...edges] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = +input;

const graph = Array(input + 1)
  .fill(0)
  .map(() => []);

for (let edge of edges) {
  const [a, b] = edge.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let parents = Array(input + 1).fill(0);

const queue = [];
parents[1] = 1;
for (let next of graph[1]) {
  parents[next] = 1;
  queue.push(next);
}
while (queue.length) {
  const node = queue.shift();
  for (let next of graph[node]) {
    if (parents[next]) continue;
    parents[next] = node;
    queue.push(next);
  }
}

parents = parents.slice(2);
let result = "";
parents.map((v) => (result += `${v}\n`));
console.log(result.trim());
