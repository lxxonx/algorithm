const fs = require("fs");
const [x, y] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

if (x === y) return console.log(-1);
const z = Math.floor((y * 100) / x);
if (z >= 99) return console.log(-1);

const search = (start, end) => {
  let mid = Math.floor((start + end) / 2);

  //   console.log(start, end, mid);

  if (start > end) return end + 1;
  if (Math.floor(((y + mid) / (x + mid)) * 100) > z)
    return search(start, mid - 1);
  else return search(mid + 1, end);
};

console.log(search(1, 1000000000));
