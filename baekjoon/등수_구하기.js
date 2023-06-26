const [[n, taesu, p], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
if (n === 0) {
  console.log(1);
  return;
}
arr.push(taesu);
const arrSorted = arr.sort((a, b) => b - a);
let indexes = [];
let index = arrSorted.indexOf(taesu);
while (index !== -1) {
  indexes.push(index + 1);
  index = arrSorted.indexOf(taesu, index + 1);
}
if (indexes[indexes.length - 1] > p) console.log(-1);
else console.log(indexes[0]);
