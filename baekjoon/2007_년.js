const [mon, date] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const d = new Date(`2007-${mon}-${date}`);

console.log(day[d.getDay()]);
