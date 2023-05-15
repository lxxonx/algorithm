let [n, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

words.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

let ans = "";
for (let i = 0; i < n; i++) {
  if (words[i] === words[i + 1]) {
    continue;
  }
  ans += words[i] + "\n";
}

console.log(ans.trim());
