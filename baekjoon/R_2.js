const fs = require("fs");
const [R1, S] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const R2 = 2 * S - R1;

console.log(R2);
