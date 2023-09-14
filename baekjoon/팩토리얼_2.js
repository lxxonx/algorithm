const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

if (input === 0) {
  console.log(1);
  return;
}

let factorial = 1;

for (let i = 2; i <= input; i++) {
  factorial *= i;
}

console.log(factorial);
