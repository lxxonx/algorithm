const [num, ...names] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let name of names) {
  console.log(name.toLowerCase());
}
