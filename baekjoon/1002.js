const fs = require("fs");
const [t, ...cases] = fs.readFileSync("/dev/stdin").toString().split("\n");

const sol = () => {
  for (let i = 0; i < +t; i++) {
    const [x1, y1, r1, x2, y2, r2] = cases[i].split(" ").map(Number);
    const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if (dist === 0 && r1 === r2) console.log(-1);
    else if (dist === r1 + r2 || dist === Math.abs(r1 - r2)) console.log(1);
    else if (dist > r1 + r2 || dist < Math.abs(r1 - r2)) console.log(0);
    else console.log(2);
  }
};

sol();
