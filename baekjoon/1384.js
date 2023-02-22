const input = `5
Ann P N P P
Bob P P P P
Clive P P P P
Debby P N P P
Eunice N N N N
6
Zheng P P P P P
Yeng P P P P P
Xiao P P P P N
Will P P P P P
Veronica P P P P P
Utah P P P P P
0`;

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim()

const parseGroup = (input) => {
  const lines = input.split("\n");
  const group = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "0") break;
    if (!isNaN(Number(lines[i]))) {
      const g = lines.slice(i + 1, i + 1 + Number(lines[i]));
      const o = g.map((v) => {
        const [name, ...comments] = v.split(" ");
        return { name, comments };
      });
      group.push(o);
    }
  }
  return group;
};

const mapComment = (group) => {
  return group.map((v, i) => {
    const rotate = rotateArr(group, i);
    const ppl = rotate.filter((g) => g.name !== v.name);
    const reverse = ppl.reverse();

    v.comments = v.comments.map((c, j) => {
      return {
        name: reverse[j].name,
        comment: c,
      };
    });
    return v;
  });
};

const rotateArr = (arr, k) => {
  const copy = [...arr];
  const spliced = copy.splice(0, k);
  copy.push(...spliced);
  return copy;
};

const solution = (input) => {
  let groups = parseGroup(input);
  groups = groups.map((group) => mapComment(group));

  for (const index in groups) {
    console.log(`Group ${Number(index) + 1}`);

    let count = 0;
    groups[index].forEach((v) => {
      v.comments.forEach((c) => {
        if (c.comment === "N") {
          count++;
          console.log(`${c.name} was nasty about ${v.name}`);
        }
      });
    });
    if (count === 0) console.log("Nobody was nasty");

    if (index < groups.length - 1) console.log();
  }
};

solution(input);
