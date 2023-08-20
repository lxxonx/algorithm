const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const map = Array.from({ length: 9 }).fill(0);

for (let char of input) {
  if (char === "9") {
    char = "6";
  }
  map[+char]++;
}

if (map[6] % 2 === 0) {
  map[6] = parseInt(map[6] / 2);
} else {
  map[6] = parseInt(map[6] / 2) + 1;
}

const ans = Math.max(...map);

console.log(ans);
