let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);

let count = 0;

for (let i = 0; i < M; i++) {
  const idx = arr.indexOf(nums[i]);

  if (idx <= arr.length / 2) {
    while (arr[0] !== nums[i]) {
      arr.push(arr.shift());
      count++;
    }
  } else {
    while (arr[0] !== nums[i]) {
      arr.unshift(arr.pop());
      count++;
    }
  }

  arr.shift();
}

console.log(count);
