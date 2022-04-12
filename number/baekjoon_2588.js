// https://www.acmicpc.net/problem/2588
// 문제
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

// 출력
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

const units = [
  num2 % 10,
  ((num2 % 100) - (num2 % 10)) / 10,
  parseInt(num2 / 100),
];

console.log(num1 * units[0]);
console.log(num1 * units[1]);
console.log(num1 * units[2]);
console.log(num1 * num2);
