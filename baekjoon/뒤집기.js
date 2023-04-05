const fs = require("fs");
const binary = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split("");

const arr = { 0: [], 1: [] };

let before = { val: binary[0], idx: 0 };

for (let i = 1; i < binary.length; i++) {
  if (before.val !== binary[i]) {
    arr[before.val].push(binary.slice(before.idx, i).join(""));
    before = { val: binary[i], idx: i };
  }
}

arr[before.val].push(binary.slice(before.idx).join(""));

console.log(Math.min(arr[0].length, arr[1].length));
