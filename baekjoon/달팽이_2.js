const [h, w] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: h }, () => Array.from({ length: w }, () => 0));

const next = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const queue = [[0, 0]];
let nextIndex = 0;
let count = 0;

while (queue.length) {
  const [x, y] = queue.shift();
  arr[x][y] = 1;

  for (let i = 0; i < 2; i++) {
    let n = next[nextIndex];
    let nx = x + n[0];
    let ny = y + n[1];
    if (0 <= nx && nx < h && 0 <= ny && ny < w && arr[nx][ny] === 0) {
      queue.push([nx, ny]);
      break;
    } else {
      nextIndex = (nextIndex + 1) % 4;
      n = next[nextIndex];
      nx = x + n[0];
      ny = y + n[1];
      if (arr[nx][ny] === 1) {
        break;
      }
      count++;
    }
  }
}

console.log(count);
