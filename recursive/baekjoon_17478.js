const fs = require("fs");
const [n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const opening = `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`;
const recursiveAnswer = (_num, _depth) => {
  const q = `"재귀함수가 뭔가요?"`;
  const a1 = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
  const a2 = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
  const a3 = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
  const answer = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
  const closing = `라고 답변하였지.`;
  const prefix = `____`;
  if (_depth > _num) return;
  else if (_depth == _num) {
    console.log(prefix.repeat(_depth) + q);
    console.log(prefix.repeat(_depth) + answer);
    console.log(prefix.repeat(_depth) + closing);
  } else {
    console.log(prefix.repeat(_depth) + q);
    console.log(prefix.repeat(_depth) + a1);
    console.log(prefix.repeat(_depth) + a2);
    console.log(prefix.repeat(_depth) + a3);
    recursiveAnswer(_num, _depth + 1);
    console.log(prefix.repeat(_depth) + closing);
  }
};

console.log(opening);
recursiveAnswer(n, 0);
