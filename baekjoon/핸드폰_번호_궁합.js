let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let dp = "";

for (let i = 0; i < a.length; i++) {
  dp += a.at(i) + b.at(i);
}

while (dp.length > 2) {
  let temp = "";
  for (let i = 0; i < dp.length - 1; i++) {
    temp += (+dp.at(i) + +dp.at(i + 1)) % 10;
  }
  dp = temp;
}

console.log(dp);
