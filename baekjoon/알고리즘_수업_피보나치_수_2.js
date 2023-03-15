const fs = require("fs");
const num = fs.readFileSync("dev/stdin").toString().trim();

const number = Number(num);

let x = 1,
  y = 1;
const fibonacci = (n) => {
  if (n === 1 || n === 2) return 1;
  for (let i = 3; i <= n; i++) {
    [x, y] = [y, (x + y) % 1000000007];
  }

  return y;
};

console.log(fibonacci(number), number - 2);
