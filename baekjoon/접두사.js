let [n, ...prefix] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
prefix = prefix.sort((a, b) => a.length - b.length);

const set = new Set(prefix);
const arr = Array.from(set);

for (let i = 0; i < arr.length - 1; i++) {
  const curr = arr[i];
  for (let j = i + 1; j < arr.length; j++) {
    let comp = arr[j];
    comp = comp.substring(0, curr.length);
    if (comp === curr) {
      set.delete(curr);
    }
  }
}

console.log(set.size);
