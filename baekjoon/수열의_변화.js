const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [_, K] = input.shift().split(" ").map(Number);
let list = input.shift().split(",").map(Number);

for (let i = 0; i < K; i++) {
  const newList = [];
  for (let j = 0; j < list.length - 1; j++) {
    newList.push(list[j + 1] - list[j]);
  }

  list = newList;
}

console.log(list.toString());
