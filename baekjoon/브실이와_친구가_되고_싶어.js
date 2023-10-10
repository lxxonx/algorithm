const [[a, b], [k, x]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

const min = Math.max(a, k - x);

const max = Math.min(b, k + x);

const ans = max - min + 1;

if (ans < 0) {
  console.log("IMPOSSIBLE");
} else {
  console.log(ans);
}
