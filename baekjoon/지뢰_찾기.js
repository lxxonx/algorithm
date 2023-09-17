let [row, ...m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
row = +row;
m = m.map((e) => e.trim().split(""));

const newMap = Array.from(Array(row), () => Array(row).fill(0));

const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

for (let i = 0; i < row; i++) {
  for (let j = 0; j < row; j++) {
    if (m[i][j] !== ".") {
      newMap[i][j] = "*";
      continue;
    }
    for (let [dx, dy] of delta) {
      const nx = i + dx;
      const ny = j + dy;
      if (nx < 0 || ny < 0 || nx >= row || ny >= row || m[nx][ny] === ".") {
        continue;
      }
      newMap[i][j] += +m[nx][ny];
    }

    if (newMap[i][j] >= 10) {
      newMap[i][j] = "M";
    }
  }
}

console.log(newMap.map((e) => e.join("")).join("\n"));
