let fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ");

const sol = (a, b) => {
  const num_a = +a;
  const num_b = +b;
  return num_a * num_b;
};

const answer = sol(a, b);
console.log(answer);
