const fs = require("fs");
const [N, F] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let add = parseInt(N / 100) * 100;
while (add % F !== 0) {
  add++;
}

const last2Digit = add % 100;

if (last2Digit < 10) {
  console.log("0" + last2Digit);
} else {
  console.log(last2Digit);
}
