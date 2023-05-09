let [size, ...lines] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
size = parseInt(size);
const h = lines.map((v) => v.split(" ").map(Number));

const res = [];

for (let i = 0; i < size; i++) {
  const same = [];
  for (let j = 0; j < 5; j++) {
    const c = h[i][j];
    for (let k = 0; k < size; k++) {
      if (k === i) continue;
      if (h[k][j] === c && !same.includes(k)) {
        same.push(k);
      }
    }
  }
  res.push(same.length);
}

console.log(res.indexOf(Math.max(...res)) + 1);
