const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(""));

const isUpper = (c) => c === c.toUpperCase();
const isLower = (c) => c === c.toLowerCase();

const map = {
  k: 0,
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
};

const flat = input.reduce((acc, cur) => acc.concat(cur), []);

const sum = flat.reduce((acc, cur) => {
  if (cur === ".") {
    return acc;
  }
  if (isUpper(cur)) {
    return acc + map[cur.toLowerCase()];
  } else if (isLower(cur)) {
    return acc - map[cur];
  }
}, 0);

console.log(sum);
