const fs = require("fs");

let [n, ...dominos] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = +n;
dominos = dominos.map((v) => v.split(" ").map(BigInt));

const left = Array.from({ length: n }, () => -1);
const right = Array.from({ length: n }, () => -1);

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (compare(arr[mid], x) <= 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function compare(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

dominos.sort((a, b) => a[0] - b[0]);

function findLeft(here) {
  if (left[here] !== -1) {
    return left[here];
  }

  const [a, b] = dominos[here];
  const t = binarySearch(dominos, [a - b, -1]);
  let ret = t;
  for (let i = t; i < here; i++) {
    ret = Math.min(ret, findLeft(i));
  }
  left[here] = ret;
  return ret;
}

function findRight(here) {
  if (right[here] !== -1) {
    return right[here];
  }

  const [a, b] = dominos[here];
  const t = binarySearch(dominos, [a + b, Infinity]);
  let ret = t - 1;
  for (let i = here + 1; i < t; i++) {
    ret = Math.max(ret, findRight(i));
  }
  right[here] = ret;
  return ret;
}

for (let i = 0; i < n; i++) {
  findLeft(i);
  findRight(i);
}

const dp = Array(n).fill(Infinity);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  dp[i] = Math.min(dp[i], 1 + (left[i] > 0 ? dp[left[i] - 1] : 0));
  for (let j = 0; j < i; j++) {
    if (right[j] >= i) {
      dp[i] = Math.min(dp[i], 1 + (j > 0 ? dp[j - 1] : 0));
    }
  }
}

console.log(dp[n - 1]);
