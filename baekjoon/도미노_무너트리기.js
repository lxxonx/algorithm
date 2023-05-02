const fs = require("fs");
const [num, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +num;

cases.sort((a, b) => {
  [aX, aL] = a.split(" ").map(Number);
  [bX, bL] = b.split(" ").map(Number);
  return aX - bX;
});

let count = 0;
let lastX = 0;
for (let i = 0; i < N; i++) {
  const [x, l] = cases[i].split(" ").map(Number);
  if (lastX < x) {
    count++;
  }
  lastX = x + l;
}

console.log(count);
