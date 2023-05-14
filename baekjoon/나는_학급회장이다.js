let [n, ...votes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = Number(n);
votes = votes.map((c) => c.split(" ").map(Number));

const candidates = Array.from({ length: 3 }, (_, i) => {
  return {
    index: i + 1,
    sum: 0,
    1: 0,
    2: 0,
    3: 0,
  };
});

for (const i of votes) {
  for (let j = 0; j < 3; j++) {
    candidates[j].sum += i[j];
    candidates[j][i[j]] += 1;
  }
}

candidates.sort((a, b) => {
  if (a.sum === b.sum) {
    if (a[3] === b[3]) {
      return b[2] - a[2];
    } else {
      return b[3] - a[3];
    }
  } else {
    return b.sum - a.sum;
  }
});

if (
  candidates[0].sum === candidates[1].sum &&
  candidates[0][3] === candidates[1][3] &&
  candidates[0][2] === candidates[1][2]
) {
  console.log(0, candidates[0].sum);
} else {
  console.log(candidates[0].index, candidates[0].sum);
}
