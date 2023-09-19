const [num, ...subjects] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const scoreMap = {
  "A+": 430,
  A0: 400,
  "A-": 370,
  "B+": 330,
  B0: 300,
  "B-": 270,
  "C+": 230,
  C0: 200,
  "C-": 170,
  "D+": 130,
  D0: 100,
  "D-": 70,
  F: 0,
};

const scores = subjects
  .map((subject) => {
    const [_, credit, score] = subject.split(" ");
    return [+credit, scoreMap[score] * credit];
  })
  .reduce(
    (acc, cur) => {
      const [credit, score] = cur;
      acc[0] += credit;
      acc[1] += score;
      return acc;
    },
    [0, 0]
  );

let output = (scores[1] / scores[0]).toFixed(0).split("");
output.splice(-2, 0, ".");
output = output.join("");
console.log(output);
