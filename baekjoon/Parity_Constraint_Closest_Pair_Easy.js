const fs = require("fs");
const [n, cases] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = Number(n);
const nums = cases.split(" ").map(Number);

nums.sort((a, b) => a - b);

let prevOdd = -Infinity;
let prevEven = -Infinity;

let oddMin = Infinity;
let evenMin = Infinity;

for (let i = 0; i < length; i++) {
  if (nums[i] % 2 === 0) {
    const oddDist = nums[i] - prevOdd;
    oddMin = Math.min(oddMin, oddDist);
    const evenDist = nums[i] - prevEven;
    evenMin = Math.min(evenMin, evenDist);
    prevEven = nums[i];
  } else {
    const oddDist = nums[i] - prevEven;
    const evenDist = nums[i] - prevOdd;
    evenMin = Math.min(evenMin, evenDist);
    oddMin = Math.min(oddMin, oddDist);
    prevOdd = nums[i];
  }
}

if (oddMin === Infinity) {
  oddMin = -1;
}
if (evenMin === Infinity) {
  evenMin = -1;
}

console.log(evenMin, oddMin);
