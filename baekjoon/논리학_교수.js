let [n, cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = Number(n);
cases = cases.split(" ").map(Number);

const obj = [];

for (const i of cases) {
  obj[i] = obj[i] ? obj[i] + 1 : 1;
}

const candidate = [];
for (const i of obj) {
  if (obj[i] == i) {
    candidate.push(i);
  }
}

if (candidate.length) {
  console.log(Math.max(...candidate) || 0);
} else {
  console.log(-1);
}
