const fs = require("fs");
const [t, ...nums] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const sol = () => {
  const fiboTable = {
    0: [1, 0],
    1: [0, 1],
    2: [1, 1],
    3: [1, 2],
    4: [2, 3],
  };
  for (let i = 0; i < t; i++) {
    const n = nums[i];
    if (n < 5) {
      console.log(...fiboTable[n]);
      continue;
    } else {
      for (let j = 5; j <= n; j++) {
        fiboTable[j] = [
          fiboTable[j - 1][0] + fiboTable[j - 2][0],
          fiboTable[j - 1][1] + fiboTable[j - 2][1],
        ];
      }
      console.log(...fiboTable[n]);
    }
  }
};

sol();
