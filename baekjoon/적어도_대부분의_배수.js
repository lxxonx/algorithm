const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let c = Math.min(...input);

while (true) {
  const numOfDivisor = input.filter((v) => c % v === 0).length;

  if (numOfDivisor >= 3) {
    console.log(c);
    break;
  }

  c++;
}
