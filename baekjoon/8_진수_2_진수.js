const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const oct = ["000", "001", "010", "011", "100", "101", "110", "111"];

let out = "";

for (let i = 0; i < input.length; i++) {
  if (i === 0 && input[i] === "0") {
    console.log(0);
    break;
  }
  out += oct[Number(input[i])];
}

while (out[0] === "0") {
  out = out.slice(1);
}

console.log(out);
