const [q, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, t] = q.split(" ").map(Number);

const absDiff = (a, b) => a - b;

let min = Infinity;

for (let j = 0; j < n; j++) {
  const [s, i, c] = cases[j].split(" ").map(Number);

  const resMin = Math.min(
    ...Array.from({ length: c }).map((_, idx) => {
      if (s + idx * i < t) {
        return Infinity;
      } else {
        return s + idx * i - t;
      }
    })
  );

  if (resMin < min) {
    min = resMin;
  }
}

if (min === Infinity) {
  console.log(-1);
} else {
  console.log(min);
}
