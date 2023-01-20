// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let input = `20
7
23
19
10
15
25
8
13`
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const getSeven = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
};

let result = getSeven(input);
result = result.sort((a, b) => a - b);

for (let i = 0; i < 7; i++) {
  console.log(result[i]);
}
