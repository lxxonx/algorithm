const [patty, cheese] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (patty - 1 <= cheese) {
  console.log(patty * 2 - 1);
} else {
  console.log(cheese * 2 + 1);
}
