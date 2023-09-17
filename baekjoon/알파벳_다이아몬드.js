const [n, r1, c1, r2, c2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const mid = n - 1;
const end = mid * 2;
const baseChar = "a".charCodeAt(0);

let res = "";

for (let i = r1; i <= r2; i++) {
  for (let j = c1; j <= c2; j++) {
    const dist =
      Math.abs((i % (end + 1)) - mid) + Math.abs((j % (end + 1)) - mid);
    if (dist >= n) {
      res += ".";
      continue;
    }
    res += String.fromCharCode(baseChar + (dist % 26));
  }
  res += "\n";
}

console.log(res);
