// 잘라서 배열로 저장하기

// slice() 메소드는 알고 있었는데 접근 방법을 생각 못했다
// 일단 요소들을 다 출력해야하니까 모든 요소를 돌아야함 그러니 반복문 사용
// i의 증감식을 생각하고 splice()에 들어갈 매개변수가 핵심

// 접근법인 반복문을 사용해야한다는걸 알고 나니 나머지는 잘 풀렸다

// 1) slice(시작 위치, 종료 위치)
function solution(my_str, n) {
  let arr = [];
  // for 반복문을 통해 문자열 순회
  for (let i = 0; i < my_str.length; i += n) {
    // i를 n만큼 증가시켜 문자열을 잘라낼 위치 계산
    arr.push(my_str.slice(i, n + i));
    // slice 메소드를 이용하여 잘라낼 첫 위치와 끝 위치 지정
  }
  return arr;
}

// 2) substr(시작 위치, 길이)
function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
}

// 3) while 반복문, splice(시작 인덱스, 제거할 요수, (추가할 요소))
function solution(my_str, n) {
  let strArr = my_str.split("");
  let answer = [];

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(""));
    // 잘라낸 요소를 빈 배열에 추가
  }
  return answer;
}
