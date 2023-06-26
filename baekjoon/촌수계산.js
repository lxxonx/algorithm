let [n, prob, t, ...relations] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

n = +n;
prob = prob.split(" ").map(Number);
t = +t;
relations = relations.map((relation) => relation.split(" ").map(Number));

const relationMap = new Map();

for (let i = 0; i < t; i++) {
  const [a, b] = relations[i];
  if (!relationMap.has(a)) {
    relationMap.set(a, []);
  }
  if (!relationMap.has(b)) {
    relationMap.set(b, []);
  }
  relationMap.get(a).push(b);
  relationMap.get(b).push(a);
}

const queue = [prob[0]];

const visited = Array(n + 1).fill(0);

while (queue.length) {
  const current = queue.shift();
  for (let i = 0; i < relationMap.get(current).length; i++) {
    const next = relationMap.get(current)[i];
    if (next === prob[1]) {
      console.log(visited[current - 1] + 1);
      return;
    }
    if (visited[next - 1]) continue;
    queue.push(next);
    visited[next - 1] = visited[current - 1] + 1;
  }
}

console.log(-1);
