const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: input[1] + 1 }).fill(true);
arr[0] = arr[1] = false;
const sqrt = parseInt(Math.sqrt(input[1]));

for (let i = 2; i <= sqrt; i++) {
  if (arr[i] === true) {
    for (let j = 2; i * j <= input[1]; j++) {
      arr[i * j] = false;
    }
  }
}

function isPrime(num) {
  return arr[num];
}

function isUnderPrime(num) {
  let count = 0;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    while (num % i === 0) {
      num /= i;
      count++;
    }
  }
  if (num !== 1) count++;
  return isPrime(count);
}

let count = 0;
for (let i = input[0]; i <= input[1]; i++) {
  isUnderPrime(i) && count++;
}
console.log(count);
