// 캐릭터의 좌표

// 문제의 포인트
// 주어진 board[가로 크기, 세로 크기]의 크기를 벗어난 입력은 무시
// 예를 들어, board[7, 9]이고 아래로 다섯칸 이동일 경우
// 세로의 크기가 9이면 최대 4까지 이동 가능.
// 따라서 나머지 1칸은 이동 불가하므로 [0, -4]

// 풀이 1
// 매번 이동 후 board의 범위를 넘지 않도록 조정
function solution(keyinput, board) {
  let arr = [0, 0];

  // 최대 크기 범위를 변수로 지정해서 사용
  let maxX = Math.floor(board[0] / 2);
  let maxY = Math.floor(board[1] / 2);

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left") {
      arr[0] -= 1;
    } else if (keyinput[i] === "right") {
      arr[0] += 1;
    } else if (keyinput[i] === "up") {
      arr[1] += 1;
    } else if (keyinput[i] === "down") {
      arr[1] -= 1;
    }

    // 매번 board의 크기를 넘지 않도록 조정 필요.
    if (arr[0] > maxX) {
      arr[0] = maxX;
    } else if (arr[0] < -maxX) {
      arr[0] = -maxX;
    }

    if (arr[1] > maxY) {
      arr[1] = maxY;
    } else if (arr[1] < -maxY) {
      arr[1] = -maxY;
    }
  }

  return arr;
}

// 풀이 2
// for ... of문과 switch문 사용
function solution(keyinput, board) {
  let res = [0, 0];
  let maxX = Math.floor(board[0] / 2);
  let maxY = Math.floor(board[1] / 2);

  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < maxX) res[0]--;
        break;
      case "right":
        if (res[0] < maxX) res[0]++;
        break;
      case "up":
        if (res[1] < maxY) res[1]++;
        break;
      case "down":
        if (-res[1] < maxY) res[1]--;
        break;
    }
  }
  return res;
}
