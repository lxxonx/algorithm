const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const diff = b.length - a.length;

let min = Infinity;

for (let i = 0; i <= diff; i++) {
  let temp = 0;
  for (let j = 0; j < a.length; j++) {
    if (a.charAt(j) !== b.charAt(j + i)) {
      temp++;
    }
  }
  min = Math.min(min, temp);
}

console.log(min);
