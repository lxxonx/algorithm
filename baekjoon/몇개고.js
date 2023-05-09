const [time, isWithAlcohol] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const isLunch = time >= 12 && time <= 16;

if (!isLunch) {
  console.log(280);
} else {
  if (isWithAlcohol) {
    console.log(280);
  } else {
    console.log(320);
  }
}
