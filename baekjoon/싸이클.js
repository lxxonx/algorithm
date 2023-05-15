const [N, P] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const arr = [];

let next = N;

while (true) {
  next = (next * N) % P;
  if (arr.includes(next)) {
    console.log(arr.length - arr.indexOf(next));
    break;
  }
  arr.push(next);
}
