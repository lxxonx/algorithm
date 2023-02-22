const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const buddhist_year = parseInt(input[0]);

const western_year = buddhist_year - 543;

console.log(western_year);
