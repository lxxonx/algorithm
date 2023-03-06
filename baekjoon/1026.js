const fs = require("fs");
const [len, a, b] = fs.readFileSync("/dev/stdin").toString().split("\n");

const leng = +len;

const arrA = a.split(" ").map(Number);
const arrB = b.split(" ").map(Number);

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < leng; i++) {
  sum += arrA[i] * arrB[i];
}

console.log(sum);
