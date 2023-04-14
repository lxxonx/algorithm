// const fs = require("fs");
// const [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = "🔢📟";
const b = "🔢📟📟📟📟";

const emojiMap = {
  "📟": "40404",
  "🔢": "1234",
  "🎰": "777",
  "": "109",
  "💯": "100",
  "🏪": "24",
  "🧑‍🏫": "22",
  "🧑🏻‍🏫": "22",
  "🧑🏼‍🏫": "22",
  "🧑🏽‍🏫": "22",
  "🧑🏾‍🏫": "22",
  "🧑🏿‍🏫": "22",
  "👨‍🏫": "22",
  "👨🏻‍🏫": "22",
  "👨🏼‍🏫": "22",
  "👨🏽‍🏫": "22",
  "👨🏾‍🏫": "22",
  "👨🏿‍🏫": "22",
  "👩‍🏫": "22",
  "👩🏻‍🏫": "22",
  "👩🏼‍🏫": "22",
  "👩🏽‍🏫": "22",
  "👩🏾‍🏫": "22",
  "👩🏿‍🏫": "22",
  "🔞": "18",
  "📅": "17",
  "📆": "17",
  "🔟": "10",
  "9️⃣": "9",
  "🎱": "8",
  "8️⃣": "8",
  "7️⃣": "7",
  "6️⃣": "6",
  "5️⃣": "5",
  "4️⃣": "4",
  "🥉": "3",
  "🏎️": "3",
  "3️⃣": "3",
  "🥈": "2",
  "2️⃣": "2",
  "🥇": "1",
  "🔂": "1",
  "1️⃣": "1",
  "0️⃣": "0",
};

const convertEmoji = (num) => {
  let str = `${num}`;
  const vArr = Object.values(emojiMap);

  for (let i = 0; i < vArr.length; i++) {
    str = str.replaceAll(vArr[i], Object.keys(emojiMap)[i]);
  }

  return str;
};

let aNum = a.trim();
let bNum = b.trim();

for (let i = 0; i < Object.entries(emojiMap).length; i++) {
  aNum = aNum.replaceAll(Object.keys(emojiMap)[i], Object.values(emojiMap)[i]);
  bNum = bNum.replaceAll(Object.keys(emojiMap)[i], Object.values(emojiMap)[i]);
}

const sum = BigInt(aNum) + BigInt(bNum);

console.log(BigInt(aNum), BigInt(bNum));

console.log(sum);

console.log(convertEmoji(sum));
