const fs = require("fs");
const [num, ...files] = fs.readFileSync("/dev/stdin").toString().split("\n");

const number = parseInt(num);

let file = files[0].split("");

for (let i = 1; i < number; i++) {
  const new_file = files[i].split("");
  for (let j = 0; j < file.length; j++) {
    if (file[j] !== new_file[j]) {
      file[j] = "?";
    }
  }
}

console.log(file.join(""));
