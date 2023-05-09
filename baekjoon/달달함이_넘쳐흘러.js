let [a, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

a = a.split(" ").map(Number);
c = c.split(" ").map(Number);

const b = [c[0] - a[2], c[1] / a[1], c[2] - a[0]];

console.log(b.join(" "));
