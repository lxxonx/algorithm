const [_, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const vowels = ["a", "e", "i", "o", "u"];

console.log(input.split("").filter((char) => vowels.includes(char)).length);
