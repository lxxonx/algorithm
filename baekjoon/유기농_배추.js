let [t, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

t = +t;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < t; i++) {
  const [n, m, k] = cases.shift().split(" ").map(Number);
  const map = Array.from(Array(n), () => Array(m).fill(0));
  for (let j = 0; j < k; j++) {
    const coord = cases.shift().split(" ").map(Number);
    map[coord[0]][coord[1]] = 1;
  }
  const dfs = (x, y) => {
    map[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }

    return 1;
  };

  let count = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (map[x][y] === 1) {
        count += dfs(x, y);
      }
    }
  }

  console.log(count);
}
