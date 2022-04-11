// ## 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// ## 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// function solution(s) {
//   // "(" 개수
//   let open_paren = 0;

//   while (s.length != 0) {
//     const curr = s[0];
//     s = s.slice(1);
//     if (curr == "(") {
//       open_paren++;
//     } else {
//       open_paren--;
//       if (open_paren < 0) {
//         return false;
//       }
//     }
//   }

//   const answer = open_paren == 0;

//   return answer;
// }

function solution(s) {
  let arr = [...s]; // spread를 사용해서 s를 배열에 하나씩 나눔
  let left = 0; // "("을  위한 변수

  if (arr[0] === ")") return false; // 1번째 문자가 ")"이면 false를 반환

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      left++; //"("이면 left 1 증가
    } else if (left >= 1 && arr[i] === ")") {
      left--; // left가 1 이상이고 arrS[i]가 ')' 이면 left 감소
    }
  }
  if (left === 0) {
    return true; //left가 0이면 true
  } else {
    return false; // 0이 아니면 false
  }
}

const a = solution("()()");
console.log(a);
