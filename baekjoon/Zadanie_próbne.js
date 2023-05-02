const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim().split("");

console.log(str.reverse().join(""));
