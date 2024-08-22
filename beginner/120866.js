// 안전지대
// 지뢰를 둘러싼 지역까지는 위험지대
// 안전지대 수 구하기
// 2차원 배열로 주어짐.

function solution(board) {
  let answer = 0;

  // 특정 위치에서 8방향의 상대적 위치 정의
  // 즉, 현재 위치의 주변을 쉽게 참조하여 안전지대인지 위험지대인지 판단
  const dangerArea = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  // 현재 위, 아래, 오른쪽, 왼쪽, 대각선방향의 셀을 나타냄.

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 현재 위치가 위험 요소인 경우
      if (board[i][j] == 1) {
        // 현재 위치 [i, j] 기준으로 상대 좌표를 더해 주변의 실제 좌표를 계산
        dangerArea.map((v) => {
          let [x, y] = v;
          [x, y] = [x + i, y + j];
          // 위험 지대인지 확인하여 2로 표시
          if (
            x >= 0 &&
            x < board.length &&
            y >= 0 &&
            y < board[i].length &&
            board[x][y] == 0
          )
            board[x][y] = 2;
        });
      }
    }
  }
  // 안전지대(0)의 수를 셈.
  board.map((v1) => v1.map((v2) => (v2 == 0 ? answer++ : 0)));
  return answer;
}
