const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [max, n] = input[0].split(" ").map(Number);

const bidMap = Array.from({ length: max + 1 }, () => []);

for (let i = 1; i <= n; i++) {
  const [name, bid] = input[i].split(" ");
  const bidNum = Number(bid);
  if (bidMap[bidNum]) {
    bidMap[bidNum].push(name);
  }
}

const maxBid = Math.min(
  ...bidMap.map((arr) => {
    if (arr.length === 0) return Infinity;
    return arr.length;
  })
);

bidMap.findIndex((arr, i) => {
  if (arr.length === maxBid) {
    console.log(arr[0], i);
    return true;
  }
});
