// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

const fs = require("fs");
const [n] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let sum = 0;
let i = 1;
while (i <= n) {
  sum += i++;
}

console.log(sum);
