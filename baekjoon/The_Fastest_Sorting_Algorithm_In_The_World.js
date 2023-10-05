const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 1;

rl.on("line", (line) => {
  if (line === "0") {
    rl.close();
  } else {
    console.log(`Case ${count}: Sorting... done!`);
    count++;
  }
});

rl.on("close", () => {
  process.exit();
});
