const fs = require("fs");
const [num, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n");

const combination = (n, r) => {
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= n - i;
    result /= i + 1;
  }
  return result;
};

for (let i = 0; i < Number(num); i++) {
  const [n, m] = cases[i].split(" ");
  console.log(combination(Number(m), Number(n)));
}
