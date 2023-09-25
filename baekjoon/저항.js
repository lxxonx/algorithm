const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const m = `black	0	1
brown	1	10
red	2	100
orange	3	1,000
yellow	4	10,000
green	5	100,000
blue	6	1,000,000
violet	7	10,000,000
grey	8	100,000,000
white	9	1,000,000,000`
  .split("\n")
  .reduce((acc, cur) => {
    const [color, num] = cur.split("\t");
    acc[color] = num;
    return acc;
  }, {});

const val = m[a][0] + m[b][0] + "0".repeat(m[c][0]);

console.log(+val);
