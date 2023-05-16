const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const prize = +input;

const tax = Math.floor(prize * 0.22);

const ans = prize - tax;

const ee = Math.floor(prize * 0.2);
const tax2 = Math.floor(ee * 0.22);

const ans2 = prize - tax2;

console.log(ans, ans2);
