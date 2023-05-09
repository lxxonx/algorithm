let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = parseInt(input);

console.log(Math.ceil(input / 5));
