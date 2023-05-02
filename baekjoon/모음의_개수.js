const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const vowels = ["a", "e", "i", "o", "u"];

for (const i of input) {
  if (i === "#") {
    break;
  }

  let count = 0;

  for (const j of i) {
    if (vowels.includes(j.toLowerCase())) {
      count++;
    }
  }

  console.log(count);
}
