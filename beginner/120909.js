// 제곱수 판별하기

// 제곱수 특징
// 1. 어떤 자연수를 제곱하여 구해지는 수
//      1, 4, 9, ... 49, ...
// 2. 제곱수의 약수의 개수는 항상 홀수이다.
// 3. 그 중에서도 소수의 제곱은 약수가 반드시 세 개이다.

// 제곱수 특징을 이용한 풀이(2번 특징 사용)
// 1부터 n까지 for문을 돌려 나누고 나머지값이 없는 수(약수)를 찾아 배열에 넣음.
// 그 배열의 길이가 홀수라면(제곱수라면) 1을, 아니면 2를 리턴

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(n / i);
    }
  }
  return arr.length % 2 ? 1 : 2;
}

// 내장 함수 이용한 풀이
// Math.sqrt()
// 주어진 숫자에 루트를 씌워 숫자의 제곱근을 반환
// 실수로도 값이 반환되므로 정수인지 판별 필요
// Number.isInteger()
// : 주어진 값이 정수인지 판별한 뒤 boolean으로 값을 반환 (true, false)

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}