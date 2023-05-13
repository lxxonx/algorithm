let [num, ...graph] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

num = Number(num);
graph = graph.map((v) => v.split(""));

let pair = [];
let min = Infinity;
for (let i = 0; i < num - 1; i++) {
  for (let j = i + 1; j < num; j++) {
    let count = 0;
    for (let k = 0; k < 5; k++) {
      for (let l = 0; l < 7; l++) {
        if (graph[i * 5 + k][l] !== graph[j * 5 + k][l]) {
          count++;
        }
      }
    }

    if (count < min) {
      min = count;
      pair = [i + 1, j + 1];
    }
  }
}

console.log(pair.join(" "));
