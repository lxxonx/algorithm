const fs = require("fs");
const [k, w, h, t] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const width = w * k + t * (w + 1);
let repeat = k;

for (let i = 0; i < t; i++) {
  console.log("*".repeat(width));
}

for (let j = 0; j < h; j++) {
  for (let i = 0; i < k; i++) {
    let str = "";
    str += "*".repeat(t);
    for (let p = 0; p < w; p++) {
      str += ".".repeat(k);
      str += "*".repeat(t);
    }
    console.log(str);
  }
  for (let i = 0; i < t; i++) {
    console.log("*".repeat(width));
  }
}
