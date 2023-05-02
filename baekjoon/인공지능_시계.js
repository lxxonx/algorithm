const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [h, m, s] = input[0].split(" ").map(Number);
const t = +input[1];

const time = (h * 3600 + m * 60 + s + t) % (3600 * 24);

const hour = Math.floor(time / 3600);
const minute = Math.floor((time % 3600) / 60);
const second = time % 60;

console.log(`${hour} ${minute} ${second}`);
