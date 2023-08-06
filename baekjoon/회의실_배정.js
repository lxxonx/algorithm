let [N, ...meetings] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;
meetings = meetings.map((meeting) => meeting.split(" ").map(Number));

meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let cursor = 0;
let count = 0;

for (let i = 0; i < N; i++) {
  if (meetings[i][0] >= cursor) {
    cursor = meetings[i][1];
    count++;
  }
}

console.log(count);
