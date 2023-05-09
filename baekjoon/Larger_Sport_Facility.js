const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sol = (input) => {
  let [n, ...cases] = input;
  n = parseInt(n);
  for (let i = 0; i < n; ++i) {
    let [lt, wt, le, we] = cases[i].split(" ").map(BigInt);

    const ts = lt * wt;
    const es = le * we;

    if (ts > es) {
      console.log("TelecomParisTech");
    } else if (ts < es) {
      console.log("Eurecom");
    } else {
      console.log("Tie");
    }
  }
};
let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  sol(input);
  process.exit();
});
