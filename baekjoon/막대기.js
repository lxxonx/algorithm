const input = +require("fs").readFileSync("/dev/stdin").toString();

console.log(
  input
    .toString(2)
    .split("")
    .reduce((acc, cur) => acc + +cur, 0)
);
