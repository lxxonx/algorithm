const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const str = `:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`;

console.log(str);
