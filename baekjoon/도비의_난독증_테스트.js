let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

while (true) {
  let c = input.shift();
  if (c === "0") {
    break;
  }

  if (!isNaN(+c)) {
    let arr = input.splice(0, +c);
    arr = arr.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log(arr[0]);
  }
}
