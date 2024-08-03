// 7의 개수

// 생각하지 못한 부분
// : 정수의 배열이 주어져서 연산으로만 풀려고 함
// : 숫자면 문자열로 문자열이면 숫자로 전환한다고 생각해보기

// split() 메소드
// 문자열을 구분자를 기준으로 나눠서 배열에 담음.
// ex) a = "a, b, c"
//      a.split(,) = ["a", "b", "c"]

// - 구분자와 원본 문자열이 동일할 경우
// const sentence = "반";
// const wordsArray = sentence.split("반");

// console.log(wordsArray);
// 출력: ["", ""]

// - 구분자가 원본 문자열의 처음과 끝에 있는 경우
// const sentence = ",반갑습니다. 환영합니다!,";

// // 원본 문자열의 처음과 끝에 있는 ","를 구분자로 지정합니다.
// const wordsArray = sentence.split(",");

// // 반환하는 배열의 처음과 끝에 빈 문자열("")이 요소로 포함되어 있습니다.
// console.log(wordsArray);
// // 출력: ["", "반갑습니다. 환영합니다!", ""]

function solution(array) {
  return array.join("").split("7").length - 1;
}

// ex)
// array = [7, 77, 17]
// array.join('').split('7') = ["", "", "", "1", ""]
