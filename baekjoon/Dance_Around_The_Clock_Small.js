const fs = require("fs");
let [k, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n");

const swap = (array, i, j) => {
  i = i % array.length;
  j = j % array.length;

  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getSide = (arr, key, caseIndex) => {
  i = arr.findIndex((a) => a === key);

  const nextIndex = i + 1 > arr.length - 1 ? 0 : i + 1;
  const prevIndex = i === 0 ? arr.length - 1 : i - 1;

  console.log(`Case #${caseIndex}: ${arr[nextIndex]} ${arr[prevIndex]}`);
};

for (let i = 0; i < k; i++) {
  let [d, k, n] = cases[i].split(" ").map(Number);

  const arr = Array.from({ length: d }).map((_, i) => i + 1);

  for (let j = 1; j <= n % d; j++) {
    if (j % 2 === 0) {
      // 짝수
      // swap(홀수 인덱스, 다음 인덱스)
      for (let a = 0; a < arr.length; a++) {
        if (a % 2 === 1) {
          swap(arr, a, a + 1);
        }
      }
    } else {
      // 홀수일 때,
      // swap(짝수 인덱스, 다음 인덱스)
      for (let a = 0; a < arr.length; a++) {
        if (a % 2 === 0) {
          swap(arr, a, a + 1);
        }
      }
    }
  }
  getSide(arr, k, i + 1);
}
