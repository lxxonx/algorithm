let [K, L] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");
[K, L] = [BigInt(K), +L];

const ast = new Array(L).fill(true);
ast[0] = ast[1] = false;
for (let i = 2; i < L; i++) {
  if (ast[i]) {
    for (let j = i + i; j < L; j += i) {
      if (ast[j]) ast[j] = false;
    }
  }
}

for (let i = 2; i < L; i++) {
  if (ast[i] && !(K % BigInt(i))) {
    process.stdout.write(`BAD ${i}`);
    process.exit(0);
  }
}
process.stdout.write("GOOD");
