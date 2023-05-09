const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim().split("");

function sol(_str) {
  if (_str.length === 3) {
    return _str.join("");
  }

  let results = [];
  for (let i = 1; i < _str.length - 1; i++) {
    for (let j = i + 1; j < _str.length; j++) {
      const newArr = [];
      newArr.push(_str.slice(0, i).reverse().join(""));
      newArr.push(_str.slice(i, j).reverse().join(""));
      newArr.push(_str.slice(j).reverse().join(""));

      const newStr = newArr.join("");
      results.push(newStr);
    }
  }

  results.sort((a, b) => a.localeCompare(b));

  return results[0];
}

console.log(sol(str));
