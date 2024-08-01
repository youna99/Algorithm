// 세균 증식 (2제곱근)
// 1시간에 두배만큼 증가
// n마리가 t시간 이후 증가된 수

// 내 풀이
function solution(n, t) {
  let result = n;
  for (let i = 1; i <= t; i++) {
    result = result * 2;
  }
  return result;
}

// 내장된 메소드 이용
// Math.pow(밑 값, 밑을 제곱하기 위해 사용하는 지수)
function solution(n, t) {
  return n * Math.pow(2, t);
}

// + 시트 연산자 이용
function solution(n, t) {
  return n << t;
}
