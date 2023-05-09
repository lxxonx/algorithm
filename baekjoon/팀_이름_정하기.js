let [yName, num, ...tNames] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
num = parseInt(num);

const name = {
  L: 0,
  O: 0,
  V: 0,
  E: 0,
};

for (let i = 0; i < yName.length; i++) {
  switch (yName[i]) {
    case "L":
      name.L++;
      break;
    case "O":
      name.O++;
      break;
    case "V":
      name.V++;
      break;
    case "E":
      name.E++;
      break;
  }
}

//((L+O) × (L+V) × (L+E) × (O+V) × (O+E) × (V+E)) mod 100
const formula = (tName) => {
  let [L, O, V, E] = [name.L, name.O, name.V, name.E];
  for (let i = 0; i < tName.length; i++) {
    switch (tName[i]) {
      case "L":
        L++;
        break;
      case "O":
        O++;
        break;
      case "V":
        V++;
        break;
      case "E":
        E++;
        break;
    }
  }

  return ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
};

const cand = [];
for (let i = 0; i < num; i++) {
  const res = formula(tNames[i]);

  cand.push({
    name: tNames[i],
    num: res,
  });
}

cand.sort((a, b) => {
  if (a.num === b.num) {
    return a.name > b.name ? 1 : -1;
  } else {
    return a.num < b.num ? 1 : -1;
  }
});

console.log(cand[0].name);
