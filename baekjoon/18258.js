const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(lines[0]);

let ans = "";
let queue = [];
let head = 0,
  tail = 0;
for (let i = 1; i <= N; i++) {
  let line = lines[i].split(" ");
  switch (line.shift()) {
    case "push":
      queue.push(parseInt(line.shift()));
      tail += 1;
      break;
    case "pop":
      if (tail - head == 0) ans += "-1\n";
      else {
        ans += `${queue[head]}\n`;
        head++;
      }
      break;
    case "size":
      ans += `${tail - head}\n`;
      break;
    case "empty":
      tail - head == 0 ? (ans += `1\n`) : (ans += "0\n");
      break;
    case "front":
      if (tail - head == 0) ans += "-1\n";
      else {
        ans += `${queue[head]}\n`;
      }
      break;
    case "back":
      if (tail - head == 0) ans += "-1\n";
      else {
        ans += `${queue[tail - 1]}\n`;
      }
      break;
  }
}
console.log(ans);
