const fs = require("fs");
const text = fs.readFileSync("./WORDL.txt").toString().split("\n");

let removed = text;

const tried = [
  {
    word: "TIGER",
    result: "00000",
  },
  {
    word: "ALKOS",
    result: "11001",
  },
  {
    word: "SHALM",
    result: "20220",
  },
  {
    word: "SCALY",
    result: "22220",
  },
];

const removeWord = (tryStr) => {
  for (let i = 0; i < 5; i++) {
    if (tryStr.result[i] === "0") {
      removed = removed.filter((v) => !v.includes(tryStr.word[i]));
    } else if (tryStr.result[i] === "2") {
      removed = removed.filter((v) => v[i] === tryStr.word[i]);
    } else if (tryStr.result[i] === "1") {
      removed = removed.filter(
        (v) => v[i] !== tryStr.word[i] && v.includes(tryStr.word[i])
      );
    }
  }
};

for (let i = 0; i < tried.length; i++) {
  removeWord(tried[i]);
}

console.log(removed);
