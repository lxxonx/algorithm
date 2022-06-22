// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = 9991;
// const divide = (num, divisor) => {
//   if (num === 1) return;
//   else if (num / divisor === 1) return console.log(divisor);
//   else if (num % divisor === 0) {
//     console.log(divisor);
//     return divide(num / divisor, 2);
//   } else return divide(num, divisor + 1);
// };

let number = +input;

while (number != 1) {
  for (let div = 2; div <= number; div++) {
    if (number % div === 0) {
      console.log(div);
      number /= div;
      break;
    }
  }
}

// divide(+input, 2);
