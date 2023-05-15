let [n, code] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = Number(n);

const words = {
  A: "000000",
  B: "001111",
  C: "010011",
  D: "011100",
  E: "100110",
  F: "101001",
  G: "110101",
  H: "111010",
};

const bitmask = (bit) => {
  let res = "";
  for (let i = 0; i < 8; i++) {
    const word = words[String.fromCharCode("A".charCodeAt(0) + i)];
    let diff = 0;
    for (let j = 0; j < 6 && diff < 2; j++) {
      if (word[j] !== bit[j]) {
        diff++;
      }
    }
    if (diff <= 1) {
      res = String.fromCharCode("A".charCodeAt(0) + i);
    }
  }

  return res;
};

let ans = "";

for (let i = 0; i < n; i++) {
  const line = code.slice(i * 6, (i + 1) * 6);

  const letter = bitmask(line);
  if (!letter) {
    console.log(i + 1);
    return;
  } else {
    ans += letter;
  }
}

console.log(ans);
