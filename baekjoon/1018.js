const fs = require("fs");
const [matrix, ...board] = fs.readFileSync("/dev/stdin").toString().split("\n");

const [height, width] = matrix.split(" ").map(Number);

const expected = [
  `BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB`,
  `WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`,
];

const sol = [];

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (i + 8 <= height && j + 8 <= width) {
      let count = 0;
      for (let k = 0; k < 2; k++) {
        for (let l = 0; l < 8; l++) {
          for (let m = 0; m < 8; m++) {
            if (board[i + l][j + m] !== expected[k][l * 9 + m]) {
              count++;
            }
          }
        }
        sol.push(count);
        count = 0;
      }
    }
  }
}

console.log(Math.min(...sol));
