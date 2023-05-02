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
  const [width, height] = mapSize.split(" ").map(Number);
  const stars = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {}
  }
};

let i = 0;
while (input[i] !== "0") {
  const length = parseInt(input[i]);
  const mapSize = input[i + 1];
  const coords = input.slice(i + 2, i + 2 + length);
  const graph = createGraph(length, mapSize, coords);

  const size = input[i + 2 + length];

  console.log(graph);

  i += 3 + length;
}
