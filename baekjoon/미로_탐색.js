const fs = require("fs");
const [input, ...table] = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input.split(" ").map(Number);

for (let i = 0; i < N; i++) {
  table[i] = table[i].split("");
}

const rootNode = { x: 0, y: 0 };

const path = (node) => {
  const { x, y } = node;
  const result = [];
  if (x - 1 >= 0 && table[x - 1][y] === "1") {
    result.push({ x: x - 1, y });
  }
  if (x + 1 < N && table[x + 1][y] === "1") {
    result.push({ x: x + 1, y });
  }
  if (y - 1 >= 0 && table[x][y - 1] === "1") {
    result.push({ x, y: y - 1 });
  }
  if (y + 1 < M && table[x][y + 1] === "1") {
    result.push({ x, y: y + 1 });
  }
  return result;
};

const result = [];
const queue = [rootNode];

while (queue.length > 0) {
  const current = queue.shift();
  result.push(current);
  path(current).forEach((coord) => {
    if (table[coord.x][coord.y]) {
      table[coord.x][coord.y] = +table[current.x][current.y] + 1;
      queue.push(coord);
    }
  });
}

console.log(table[N - 1][M - 1]);
