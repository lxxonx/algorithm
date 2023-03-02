const fs = require("fs");
const [_, given, M, found] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const givenSet = new Set(given.split(" ").map(Number));
const foundSet = found.split(" ").map(Number);

const result = [];

for (let i = 0; i < M; i++) {
  if (givenSet.has(foundSet[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));
