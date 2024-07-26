// 문자열 계산하기

function solution(my_string) {
  // 문자열을 공백을 기준으로 나누기 // ex) ['3', '+', '4']
  let arr = my_string.split(" ");
  // 첫번째 문자를 숫자로 변환
  let result = parseInt(arr[0]);

  for (let i = 1; i < arr.length; i += 2) {
    let operator = arr[i]; // 연산자
    let number = parseInt(arr[i + 1]); // 다음 문자를 숫자로 변환

    // 연산자 확인 후 계산
    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    }
  }

  return result;
}

// 예시 테스트
console.log(solution("3 + 4")); // 출력: 7
