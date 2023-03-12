const fs = require("fs");
let [k, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < k; i++) {
  let [d, k, n] = cases[i].split(" ").map(Number);

  let prevIndex = 0,
    nextIndex = 0;

  if ((k - 1) % 2 === 0) {
    prevIndex = ((k + 2 * n - 2) % d) + 1;
    nextIndex = ((k + 2 * n) % d) + 1;
  } else {
    prevIndex = ((k - 2 * n - 2) % d) + 1;
    nextIndex = ((k - 2 * n) % d) + 1;
  }

  if (prevIndex <= 0) {
    prevIndex = d + prevIndex;
  }
  if (nextIndex <= 0) {
    nextIndex = d + nextIndex;
  }

  console.log(`Case #${i + 1}: ${nextIndex} ${prevIndex}`);
}
