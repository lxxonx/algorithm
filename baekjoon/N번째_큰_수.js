const [num, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
for (let i = 0; i < num; i++) {
  const array = arr[i].split(" ").map(Number);
  array.sort((a, b) => b - a);
  console.log(array[2]);
}
