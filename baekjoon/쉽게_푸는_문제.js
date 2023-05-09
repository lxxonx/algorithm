const [start, end] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => parseInt(v));

let str = [];
let i = 1;

while (str.length < end) {
  for (let j = 0; j < i; j++) {
    str.push(i);
  }
  i++;
}

const res = str.slice(start - 1, end).reduce((acc, cur) => acc + cur, 0);
console.log(res);
