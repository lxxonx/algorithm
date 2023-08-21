const [num, ...map] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [r, c, k] = num.split(" ").map(Number);

const start = [r - 1, 0];
const dest = [0, c - 1];
const delta = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const visited = Array.from({ length: r }).map(() =>
  Array.from({ length: c }).map(() => false)
);

let result = 0;

const dfs = (x, y, cnt) => {
  if (x === c - 1 && y === 0) {
    if (cnt === k) {
      result++;
    }
    return;
  }

  for (const [dx, dy] of delta) {
    const ny = dy + y;
    const nx = dx + x;

    if (
      nx >= 0 &&
      nx < c &&
      ny >= 0 &&
      ny < r &&
      map[ny][nx] === "." &&
      visited[ny][nx] === false
    ) {
      visited[ny][nx] = true;
      dfs(nx, ny, cnt + 1);
      visited[ny][nx] = false;
    }
  }
};

dfs(0, r - 1, 1);
console.log(result);
