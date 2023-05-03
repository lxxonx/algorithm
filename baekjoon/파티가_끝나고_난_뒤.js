const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [ppl, space] = input[0].split(" ").map(Number);
const party = input[1].split(" ").map(Number);

let result = "";

const cap = ppl * space;

for (let i = 0; i < party.length; i++) {
  let temp = party[i] - cap;
  result += temp + " ";
}

console.log(result.trim());
