let [n, ...codes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = Number(n);

const MAX = 1_000_000n;

const check = (num) => {
  if (num % BigInt(2) === 0n) {
    return false;
  }
  for (let i = 3n; i < MAX; i += 2n) {
    if (num % i === 0n) {
      return false;
    }
  }

  return true;
};

for (let code of codes) {
  code = BigInt(code);
  if (check(code)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
