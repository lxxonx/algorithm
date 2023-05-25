let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((v) => v.split(" ").map(Number));

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === n - 1 && y === n - 1) return "HaruHaru";

    const jump = arr[x][y];
    arr[x][y] = 0;

    if (x + jump < n && arr[x + jump][y] !== 0) {
      queue.push([x + jump, y]);
    }

    if (y + jump < n && arr[x][y + jump] !== 0) {
      queue.push([x, y + jump]);
    }
  }

  return "Hing";
};

console.log(bfs(0, 0));
