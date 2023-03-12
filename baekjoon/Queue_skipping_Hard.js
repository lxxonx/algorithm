const fs = require("fs");
let [t, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n\n");

const leng = parseInt(t);

for (let i = 0; i < leng; i++) {
  const [nums, ...events] = cases[i].split("\n");
  const [n, e] = nums.split(" ").map(Number);

  let arr = Array.from({ length: n }).map(() => -1);

  for (let j = 0; j < e; j++) {
    const idx = events[j];
    arr[idx - 1] = j;
  }

  let printed = false;

  for (let j = 0; j < arr.length; j++) {
    if (arr[arr.length - 1 - j] === -1) {
      printed = true;
      console.log(arr.length - j);
      break;
    }
  }
  if (!printed) {
    const num = Math.min(...arr);
    const index = arr.findIndex((x) => x === num);
    console.log(index + 1);
  }
}
