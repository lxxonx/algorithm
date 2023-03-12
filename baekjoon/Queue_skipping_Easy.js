const fs = require("fs");
let [t, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n\n");

const leng = parseInt(t);

for (let i = 0; i < leng; i++) {
  const [nums, ...events] = cases[i].split("\n");
  const [n, e] = nums.split(" ").map(Number);

  let arr = Array.from({ length: n }).map((_, i) => i + 1);

  for (let j = 0; j < e; j++) {
    const person = +events[j];

    arr = arr.filter((x) => x !== person);
    arr.unshift(person);
  }

  console.log(arr.pop());
}
