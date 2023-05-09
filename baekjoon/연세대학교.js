const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const N = input[0];
const NAME = "YONSEI";
const SLOGAN = "Leading the Way to the Future";

if (N === 0) {
  console.log(NAME);
} else {
  console.log(SLOGAN);
}
