let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const lines = input.split("\n");

const N = +lines[0].trim();

const coods = lines.slice(1);
let result = [];
coods
  .sort((a, b) => {
    const [x1, y1] = a.split(" ").map(Number);
    const [x2, y2] = b.split(" ").map(Number);
    return x1 - x2 || y1 - y2;
  })
  .forEach((c) => {
    result += `${c}\n`;
  });

console.log(result);
