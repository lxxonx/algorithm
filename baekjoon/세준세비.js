const [t, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n\n");

for (let i = 0; i < t; i++) {
  const input = cases[i].split("\n");
  input.shift();
  sPower = Math.max(...input.shift().split(" ").map(Number));
  bPower = Math.max(...input.shift().split(" ").map(Number));

  if (sPower >= bPower) {
    console.log("S");
  } else if (bPower > sPower) {
    console.log("B");
  } else {
    console.log("C");
  }
}
