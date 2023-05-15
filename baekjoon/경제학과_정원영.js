let [n, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n\n");

n = Number(n);

for (let i = 0; i < n; i++) {
  const line = cases[i].split("\n");
  const [n, m] = line[0].split(" ").map(Number);
  const clang = line[1].split(" ").map(Number);
  const econ = line[2].split(" ").map(Number);

  const clangAvg = clang.reduce((a, b) => a + b, 0) / n;
  const econAvg = econ.reduce((a, b) => a + b, 0) / m;

  const candidates = clang.filter((c) => {
    return c < clangAvg && c > econAvg;
  });

  console.log(candidates.length);
}
