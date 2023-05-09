let [n, code] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = Number(n);

const codeMap = {
  AA: "A",
  AG: "C",
  AC: "A",
  AT: "G",
  GA: "C",
  GG: "G",
  GC: "T",
  GT: "A",
  CA: "A",
  CG: "T",
  CC: "C",
  CT: "G",
  TA: "G",
  TG: "A",
  TC: "G",
  TT: "T",
};

if (n === 1) {
  console.log(code);
  return;
}

let ret = "";
while (n > 1) {
  if (!ret) {
    ret = code.at(-1);
    code = code.slice(0, -1);
  }
  a = code.at(-1);
  code = code.slice(0, -1);

  ret = codeMap[a + ret];
  n--;
}

console.log(ret);
