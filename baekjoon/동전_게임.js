let [n, ...coins] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = +n;

for (let i = 0; i < n; i++) {
  const arr = new Array(8).fill(0);
  for (let j = 0; j < 38; j++) {
    const str = coins[i].slice(j, j + 3);

    //뒤뒤뒤,뒤뒤앞,뒤앞뒤,뒤앞앞,앞뒤뒤,앞뒤앞,앞앞뒤,앞앞앞
    switch (str) {
      case "TTT":
        arr[0]++;
        break;
      case "TTH":
        arr[1]++;
        break;
      case "THT":
        arr[2]++;
        break;
      case "THH":
        arr[3]++;
        break;
      case "HTT":
        arr[4]++;
        break;
      case "HTH":
        arr[5]++;
        break;
      case "HHT":
        arr[6]++;
        break;
      case "HHH":
        arr[7]++;
        break;
    }
  }
  console.log(arr.join(" "));
}
