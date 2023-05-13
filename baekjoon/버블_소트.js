let [n, cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
cases = cases.split(" ").map(Number);

let count = 0;

const mergeSort = (left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (cases[i] <= cases[j]) {
      temp[k++] = cases[i++];
    } else {
      temp[k++] = cases[j++];
      count += mid - i + 1;
    }
  }

  while (i <= mid) {
    temp[k++] = cases[i++];
  }

  while (j <= right) {
    temp[k++] = cases[j++];
  }

  for (let i = left; i <= right; i++) {
    cases[i] = temp[i];
  }
};

const merge = (left, right) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    merge(left, mid);
    merge(mid + 1, right);
    mergeSort(left, mid, right);
  }
};

const temp = Array.from({ length: n }, () => 0);
merge(0, n - 1);
console.log(count);
