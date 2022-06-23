const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

const factorial = (_num) => {
  if (_num <= 1) return 1;
  else return _num * factorial(_num - 1);
};

factorial(n);
