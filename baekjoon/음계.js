const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let ascending = false;
let descending = false;

let prev = input.shift();
while (input.length && !(ascending && descending)) {
  const element = input.shift();
  if (prev < element) {
    ascending = true;
  }
  if (prev > element) {
    descending = true;
  }
  prev = element;
}

if (ascending && descending) {
  console.log("mixed");
} else if (ascending) {
  console.log("ascending");
} else if (descending) {
  console.log("descending");
}
