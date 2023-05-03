const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const createGraph = (length, mapSize, coords) => {
  const [width, height] = mapSize.split(" ").map(Number);
  const graph = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => false)
  );

  for (let i = 0; i < length; i++) {
    const [x, y] = coords[i].split(" ").map(Number);
    graph[y - 1][x - 1] = true;
  }

  return graph;
};

const findStars = (graph, size) => {
  const [width, height] = size.split(" ").map(Number);
  const stars = [];

  for (let i = 0; i <= graph.length - height; i++) {
    for (let j = 0; j <= graph[i].length - width; j++) {
      let count = 0;
      for (let k = i; k < i + height; k++) {
        for (let l = j; l < j + width; l++) {
          if (graph[k][l]) {
            count++;
          }
        }
        stars.push(count);
      }
    }
  }

  return Math.max(...stars);
};

let i = 0;
while (input[i] !== "0") {
  const length = parseInt(input[i]);
  const mapSize = input[i + 1];
  const coords = input.slice(i + 2, i + 2 + length);
  const graph = createGraph(length, mapSize, coords);

  const size = input[i + 2 + length];

  console.log(findStars(graph, size));

  i += 3 + length;
}
