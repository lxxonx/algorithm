let [num, code] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
num = Number(num);
code = code.trim();

const arr = [];
for (let i = 0; i < code.length; i += num) {
  let temp = code.slice(i, i + num);
  if ((i / num) % 2 === 1) {
    temp = temp.split("").reverse().join("");
  }

  arr.push(temp);
}

let res = "";
for (let i = 0; i < num; i++) {
  for (let j = 0; j < arr.length; j++) {
    res += arr[j].at(i);
  }
}

console.log(res);
