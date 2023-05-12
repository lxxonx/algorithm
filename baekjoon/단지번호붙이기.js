let [size, ...map] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

size = Number(size);
map = map.map((v) => v.split("").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  map[x][y] = 0;
  let s = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < size && 0 <= ny && ny < size && map[nx][ny] == 1) {
        queue.push([nx, ny]);
        map[nx][ny] = 0;
        s++;
      }
    }
  }
  return s;
};

const res = [];
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (map[i][j] === 1) {
      const w = bfs(i, j);
      res.push(w);
    }
  }
}

console.log(res.length);
for (const i of res.sort((a, b) => a - b)) {
  console.log(i);
}
