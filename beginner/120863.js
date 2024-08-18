// 다항식 더하기

// ex)
// "3x + 7 + x" / "4x + 7"
// "x + x + x" / "3x"

// 포인트 함수: replace(a, b)
// 모든 a를 b로 바꿈.

function solution(polynomial) {
  // x 앞 숫자의 합
  let xPlus = 0;
  // 숫자 합
  let numPlus = 0;
  // 문자열을 배열로 바꾸기
  let arr = polynomial.split(" ");

  // 숫자 덧셈
  for (let i = 0; i < arr.length; i++) {
    // x 앞 계수 덧셈
    if (arr[i].includes("x")) {
      // 그냥 x면 1, 그렇지 않으면 x는 모두 ''(빈문자열)로 바꾸고 저장
      let xnum = arr[i] === "x" ? 1 : Number(arr[i].replace("x", ""));
      xPlus += xnum;
    } else if (arr[i] !== "+") {
      // +는 무시 따라서 순수 숫자만
      numPlus += Number(arr[i]);
    }
  }

  // 결과 조합
  let result = "";
  if (xPlus !== 0) result += (xPlus === 1 ? "" : xPlus) + "x";
  // 숫자 더한 값이 0이 아니면
  if (numPlus !== 0) {
    // result가 빈문자열이 아니면 + 기호
    if (result !== "") result += " + ";
    // 숫자
    result += numPlus;
  }

  return result;
}

// 수학적으로 생각하는 능력이 부족한것 같다
// replace()
