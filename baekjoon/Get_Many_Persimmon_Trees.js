const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const createGraph = (length, mapSize, coords) => {
  const [width, height] = mapSize.split(" ").map(Number);

  const sum = Array.from({ length: width + 1 }, () =>
    Array.from({ length: height + 1 }, () => 0)
  );

  for (let i = 0; i < length; i++) {
    const [x, y] = coords[i].split(" ").map(Number);
    sum[x][y]++;
  }

  for (let x = 1; x <= width; x++) {
    for (let y = 1; y <= height; y++) {
      sum[x][y] += sum[x - 1][y] + sum[x][y - 1] - sum[x - 1][y - 1];
    }
  }

  return sum;
};

const findStars = (sum, size) => {
  const [width, height] = size.split(" ").map(Number);

  let result = 0;

  for (let x = width; x < sum.length; x++) {
    for (let y = height; y < sum[x].length; y++) {
      result = Math.max(
        result,
        sum[x][y] -
          sum[x - width][y] -
          sum[x][y - height] +
          sum[x - width][y - height]
      );
    }
  }

  return result;
};

let i = 0;
while (input[i] !== "0") {
  const length = parseInt(input[i]);
  const mapSize = input[i + 1];
  const coords = input.slice(i + 2, i + 2 + length);
  const sum = createGraph(length, mapSize, coords);

  const size = input[i + 2 + length];

  console.log(findStars(sum, size));

  i += 3 + length;
}
