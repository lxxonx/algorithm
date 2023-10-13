const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const fbi = [];

for (let i = 0; i < 5; i++) {
  if (input[i].includes("FBI")) {
    fbi.push(i + 1);
  }
}

if (fbi.length === 0) {
  console.log("HE GOT AWAY!");
} else {
  console.log(fbi.join(" "));
}
