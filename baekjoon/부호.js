const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count;
let sum = 0n;

const printSign = (num) => {
  if (num > 0n) {
    return "+";
  } else if (num < 0n) {
    return "-";
  } else {
    return "0";
  }
};

rl.on("line", (line) => {
  if (count === undefined) {
    count = parseInt(line);
  } else if (count === 0) {
    console.log(printSign(sum));
    sum = 0n;
    count = parseInt(line);
  } else {
    sum += BigInt(line);
    count--;
  }
});

rl.on("close", () => {
  console.log(printSign(sum));
  process.exit();
});
