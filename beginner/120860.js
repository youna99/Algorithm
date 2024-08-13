// 직사각형 넓이 구하기

// 1. 정렬하기
function solution(dots) {
  // dots 배열을 x좌표 기준으로 오름차순 정렬
  dots.sort((a, b) => a[0] - b[0]);
  // Math.abs(): 절댓값 구하기
  // 인덱스가 0, 1인 것을 비교하면 x축이 같기 때문에 y(세로)를 구할 수 있음.
  const width = Math.abs(dots[0][1] - dots[1][1]);
  // 인덱스가 0, 2인 것을 비교하면 y축이 다르든 말든 x(가로)를 구할 수 있음.
  const heigth = Math.abs(dots[0][0] - dots[2][0]);
  return width * heigth;
}

// 2. 최대가로, 최대세로 길이 구하기
function solution(dots) {
  // x, y 값 넣을 빈 배열 선언
  let x = [];
  let y = [];

  // x, y 값 넣음.
  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }
  // x, y 각각의 최대값과 최소값을 구하여 넓이 계산
  // spread 연산자 사용 이유
  // : 배열의 요소들은 개별적인 인수로 풀어주는 역할로
  // Math.max와 Math.min은 배열을 직접 인수로 받을 수 없기 때문
  // ex) Math.max(1, 3, 4, 5) -> 5 반환
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

// 여기서 떠올렸어야할 점
// : 가로와 세로 길이는 각각의 최대값 - 최소값이라는 것!
