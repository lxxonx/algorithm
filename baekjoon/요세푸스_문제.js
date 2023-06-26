const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = Array.from({ length: n })
  .fill(0)
  .map((_, i) => i + 1);

const res = [];

let currIndex = 0;

while (arr.length) {
  currIndex = (currIndex + k - 1) % arr.length;

  const nextElement = arr[currIndex];
  res.push(nextElement);

  arr = arr.filter((v) => v !== nextElement);
}

console.log("<" + res.join(", ") + ">");
