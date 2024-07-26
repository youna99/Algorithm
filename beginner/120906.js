// 자리수 더하기

function solution(n) {
  var answer = 0; // 각 자리수 더할 변수
  var m = String(n); // 숫자를 문자로 변환

  for (let i = 0; i < m.length; i++) {
    answer += parseInt(m[i]); // 변환된 문자를 숫자로 변환하여 계산
  }
  return answer;
}

// 숫자는 length를 쓸 수 없으므로 문자로 바꿔야함.
// 또한 자리수로 쪼갤 수도 없음.

// 다른 풀이
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + cur * 1, 0);
}
// 숫자 n을 문자열로 변환하고 배열로 나눔. ex) 123 -> ['1', '2', '3']
// 배열의 각 요소를 순회하면서 누적값(acc)과 현재 값(cur)을 더함.
// cur는 문자열 타입이기 때문에 숫자형으로 변환이 필요
// -> cur * 1은 자바스크립트의 암묵적 형 변환을 이용하여 문자열을 숫자로 바꾼다.!!!
// -> parseInt(cur) 또는 Number(cur)를 사용해도 무관
