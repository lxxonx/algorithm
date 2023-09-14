const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, max] = input[0].split(" ").map(Number);

if (n === 0) {
  console.log(0);
  return;
}

const arr = input[1].split(" ").map(Number);

let count = 1;
let currBox = 0;

for (let item of arr) {
  if (currBox + item > max) {
    currBox = item;
    count++;
  } else {
    currBox += item;
  }
}

console.log(count);
