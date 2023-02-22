const fs = require("fs");
const [n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sol = (_n) => {
  let result = [];

  const star = (i, j, num) => {
    if (i % 3 === 1 && j % 3 === 1) {
      result.push(" ");
    } else {
      if (num === 1) {
        result.push("*");
      } else {
        star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
      }
    }
  };

  for (let i = 0; i < _n; i++) {
    for (let j = 0; j < _n; j++) {
      star(i, j, _n);
    }
    result.push("\n");
  }

  console.log(result.join(""));
};

sol(n);
