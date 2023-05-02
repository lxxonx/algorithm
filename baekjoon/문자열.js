const fs = require("fs");
const [num, ...str] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < num; i++) {
  console.log(`${str[i][0]}${str[i][str[i].length - 1]}`);
}
