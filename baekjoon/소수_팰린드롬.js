const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPalindrome = (num) => {
  const str = num.toString();
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
};

const solution = (input) => {
  const [start] = input.map((el) => parseInt(el));
  let i = start;
  while (true) {
    if (isPrime(i) && isPalindrome(i)) {
      console.log(i);
      break;
    }
    i++;
  }
};

solution(input);
