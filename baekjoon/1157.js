// 문제
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
// 단, 대문자와 소문자를 구분하지 않는다.

// 입력
// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다.
// 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

// 출력
// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다.
// 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

// const fs = require("fs");
// const [input] = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = "  ";

const u = input.trim().toUpperCase();

const s = u.split("").reduce((acc, cur) => {
  const index = acc?.findIndex((e) => e?.char === cur);
  if (index === -1) {
    acc.push({ char: cur, count: 1 });
  } else {
    acc[index].count += 1;
  }
  return acc;
}, []);

s.sort((a, b) => b.count - a.count);
console.log(s[0].count == s[1]?.count ? "?" : s[0].char);
