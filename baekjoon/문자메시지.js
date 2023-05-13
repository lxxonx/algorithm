const [times, words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [bt, wt] = times.split(" ").map(Number);

const buttons = {
  1: [" "],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};

const getButton = (word) => {
  for (const key in buttons) {
    if (buttons[key].includes(word)) {
      return [key, buttons[key].indexOf(word) + 1];
    }
  }
};

let time = 0;
let prev = 0;

for (const word of words) {
  const [button, i] = getButton(word);
  if (button != 1 && prev == button) {
    time += wt;
  }
  time += bt * i;
  prev = button;
}

console.log(time);
