const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const i of input) {
  if (i === "# 0 0") {
    break;
  }

  const [name, age, weight] = i.split(" ");
  let result = `${name} `;
  if (+age > 17 || +weight >= 80) {
    result += "Senior";
  } else {
    result += "Junior";
  }

  console.log(result);
}
