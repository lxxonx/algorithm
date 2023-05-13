const [size, ...map] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = size.split(" ").map(Number);
const drawing = map.map((v) => v.split(" ").map(Number));

const dfs = (x, y) => {
  drawing[x][y] = 0;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  let s = 1;
  const queue = [];
  queue.push([x, y]);

  while (queue.length) {
    const [a, b] = queue.pop();
    for (let i = 0; i < 4; i++) {
      const nx = a + dx[i];
      const ny = b + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < M && drawing[nx][ny] === 1) {
        queue.push([nx, ny]);
        drawing[nx][ny] = 0;
        s++;
      }
    }
  }
  return s;
};

let max = 0;
let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (drawing[i][j] === 1) {
      count++;
      max = Math.max(max, dfs(i, j));
    }
  }
}

console.log(count);
console.log(max);
