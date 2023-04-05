//https://en.wikipedia.org/wiki/100_prisoners_problem

const prisoners = 100;

const findable = (box) => {
  const visited = Array.from({ length: prisoners }).map(() => false);
  label: for (let i = 0; i < prisoners; i++) {
    let next = box[i];
    let count = 0;
    while (!visited[next]) {
      count++;
      visited[next] = true;
      if (count > Math.floor(prisoners / 2 + 1)) {
        return false;
      }
      if (next === i) {
        continue label;
      }
      next = box[next];
    }
  }
  return true;
};

const CASE = 1000000;

const index = async () => {
  let count = 0;
  for (let i = 0; i < CASE; i++) {
    const box = Array.from({ length: prisoners }).map((_, i) => i);
    box.sort(() => Math.random() - 0.5);
    if (findable(box)) count++;
  }

  return count / CASE;
};

console.log(index());
