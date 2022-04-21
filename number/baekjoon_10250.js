// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = `2
6 12 14
30 50 60`.split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
  const [h, w, n] = input[i].split(" ").map(Number);
  const floor = n % h == 0 ? h : n % h;
  console.log(`${floor}${Math.ceil(n / h) < 10 ? "0" : ""}${Math.ceil(n / h)}`);
}
