const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j)));

const getMid = (x1, x2, y1, y2) => {
  const x = x1 + x2;
  const y = y1 + y2;
  return [x, y];
};

for (const i of input) {
  let [x1, y1] = [i[0], i[1]];
  let [x2, y2] = [i[2], i[3]];
  let [x3, y3] = [i[4], i[5]];
  let [x4, y4] = [i[6], i[7]];

  if (x2 === x4 && y2 === y4) {
    [x3, x4] = [x4, x3];
    [y3, y4] = [y4, y3];
  } else if (x1 === x3 && y1 === y3) {
    [x1, x2] = [x2, x1];
    [y1, y2] = [y2, y1];
  } else if (x1 === x4 && y1 === y4) {
    [x1, x2] = [x2, x1];
    [y1, y2] = [y2, y1];
    [x3, x4] = [x4, x3];
    [y3, y4] = [y4, y3];
  }

  const [x, y] = getMid(x1, x4, y1, y4);

  const a = x - x2;
  const b = y - y2;

  console.log(a.toFixed(3), b.toFixed(3));
}
