const [size, ...m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const flip = (matrix, h, w) => {
  for (let i = h; i < h + 3; i++) {
    for (let j = w; j < w + 3; j++) {
      matrix[i][j] = matrix[i][j] ? 0 : 1;
    }
  }
};

const main = () => {
  const [h, w] = size.split(" ").map(Number);

  if (m.slice(0, h).join("") === m.slice(h).join("")) return 0;

  if (h < 3 || w < 3) return -1;

  const orig = m.slice(0, h).map((v) => v.split("").map(Number));
  const dest = m.slice(h).map((v) => v.split("").map(Number));

  let count = 0;
  for (let i = 0; i < h - 2; i++) {
    for (let j = 0; j < w - 2; j++) {
      if (orig[i][j] !== dest[i][j]) {
        flip(orig, i, j);
        count++;
      }
      if (
        j == w - 3 &&
        (orig[i][j + 1] !== dest[i][j + 1] || orig[i][j + 2] !== dest[i][j + 2])
      )
        return -1;
      if (
        i == h - 3 &&
        (orig[i + 1][j] !== dest[i + 1][j] || orig[i + 2][j] !== dest[i + 2][j])
      )
        return -1;
      if (
        i == h - 3 &&
        j == w - 3 &&
        (orig[i + 1][j + 1] !== dest[i + 1][j + 1] ||
          orig[i + 2][j + 2] !== dest[i + 2][j + 2])
      )
        return -1;
    }
  }
  return count;
};

console.log(main());
