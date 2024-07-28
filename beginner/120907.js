// OX 퀴즈
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 내 풀이
function solution(quiz) {
  let result = [];
  for (let i = 0; i < quiz.length; i++) {
    let quizArr = quiz[i].split(" ");
    let a = parseInt(quizArr[0]);
    let operator = quizArr[1];
    let b = parseInt(quizArr[2]);
    let c = parseInt(quizArr[4]);

    if (
      (operator === "+" && a + b === c) ||
      (operator === "-" && a - b === c)
    ) {
      result.push("O");
    } else {
      result.push("X");
    }
  }
  return result;
}

// 구조분해할당 이용
function solution(quiz) {
  let answer = [];
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(" ");
    let sum = 0;
    if (sign === "+") {
      sum = Number(x) + Number(y);
    } else {
      sum = Number(x) - Number(y);
    }
    sum === Number(z) ? answer.push("O") : answer.push("X");
  });
  return answer;
}
