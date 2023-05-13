let [n, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = Number(n);
cases = cases.map((c) => c.split(" ").map(Number));

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

for (const i of cases) {
  console.log(lcm(i[0], i[1]));
}
