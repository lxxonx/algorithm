const [n, ...brands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [cutStrings, brandsNumber] = n.split(" ").map(Number);

let setMin = Infinity;
let singleMin = Infinity;

for (let i = 0; i < brandsNumber; i++) {
  const [setPrice, singlePrice] = brands[i].split(" ").map(Number);
  singleMin = Math.min(singleMin, singlePrice);
  setMin = Math.min(setMin, setPrice, singlePrice * 6);
}

const neededSets = Math.floor(cutStrings / 6);
const neededSingles = cutStrings % 6;

let price = 0;
price += neededSets * setMin;
price += Math.min(neededSingles * singleMin, setMin);

console.log(price);
