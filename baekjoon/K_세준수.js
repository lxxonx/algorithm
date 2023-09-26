const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const prime = new Array(n + 1).fill(1).map((_, i) => i);

for (let i = 2; i <= n; i++) {
  for (let j = i * 2; j <= n; j += i) {
    prime[j] = prime[i];
  }
}
console.log(prime.filter((p) => p <= k).length - 1);
