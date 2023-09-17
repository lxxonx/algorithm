const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const long = Math.floor(input / 4);

const result = "long ".repeat(long) + "int";

console.log(result);
