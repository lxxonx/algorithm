let [n, a, x] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
n = parseInt(n);
a = a.split(" ").map((e) => parseInt(e));
x = parseInt(x);

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const arr = [];

for (let v of a) {
  if (gcd(x, v) === 1) {
    arr.push(v);
  }
}

console.log(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
