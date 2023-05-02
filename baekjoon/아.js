const fs = require("fs");
const [patient, doctor] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

if (patient.length >= doctor.length) {
  console.log("go");
} else {
  console.log("no");
}
