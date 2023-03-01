const fs = require("fs");
const [input, ...names] = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input.split(" ").map(Number);

const unheard = new Set(names.slice(0, n));
const unseen = new Set(names.slice(n));

const result = [...unheard].filter((name) => unseen.has(name));

console.log(result.length);
console.log(result.sort().join("\n"));
