// 동영상 재생기
// 'prev': 10초 전
//      조건 10초 미만인 경우 처음 위치로
// 'next': 10초 후
//      조건 남은 시간이 10초 미만인 경우 마지막 위치로
// 오프닝 건너뛰기: 현재 재생 위치가 오프닝 구간(op_start <= 현재 재생 위치 <= op_end)인 경우 오프닝 끝나는 위치로
//

// # 내 풀이(실패)
// function solution(video_len, pos, op_start, op_end, commands) {
//     let s_video_len = video_len.split(":").map(Number);
//     let s_pos = pos.split(":").map(Number);
//     let s_op_start = op_start.split(":").map(Number);
//     let s_op_end = op_end.split(":").map(Number);

//     let video_len_sec = s_video_len[0] * 60 + s_video_len[1];
//     let s_pos_sec = s_pos[0] * 60 + s_pos[1];
//     let s_op_start_sec = s_op_start[0] * 60 + s_op_start[1];
//     let s_op_end_sec = s_op_end[0] * 60 + s_op_end[1];

//     let time = s_pos_sec;

//     for(let i = 0; i < commands.length; i++) {
//         if (commands[i] === 'prev') {
//             if (s_pos_sec < 10 || time < 10) {
//                 time = 0;
//             } else {
//                 time = s_pos_sec - 10
//             }
//         } else if (commands[i] === 'next') {
//             if (s_op_start_sec <= time && time <= s_op_end_sec) {
//                 time = s_op_end_sec
//             }
//             time = s_pos_sec + 10;
//         }
//     }
//     let m = parseInt(time / 60)
//     let s = time % 60
//     if (m < 10) {
//         m = '0' + m
//     }
//     if (s < 10) {
//         s = '0' + s
//     }
//     return `${m}:${s}`
// }

// # 참고할 다른 사람 풀이
function solution(video_len, pos, op_start, op_end, commands) {
  // 분 -> 초로 변경 / 리턴값: 초
  const transTime = (time) => {
    const [m, s] = time.split(':');
    return m * 60 + s * 1;
  };

  // 초 -> 분으로 변경 / 리턴값: 분
  const secToTime = (second) => {
    const m = parseInt(second / 60);
    const s = second % 60;
    return String(m).padStart(2, 0) + ':' + String(s).padStart(2, 0);
  };

  // 오프닝 여부 체크 / 리턴값: 분
  const opCheck = (time) => {
    if (
      transTime(op_start) <= transTime(time) &&
      transTime(time) <= transTime(op_end)
    )
      return op_end;
    else return time;
  };

  // 이전으로 이동 / 리턴값: 초
  const goPrev = (time) => {
    return transTime(time) - 10 < 0 ? 0 : transTime(time) - 10;
  };

  // 다음으로 이동 / 리턴값: 초
  const goNext = (time) => {
    return transTime(time) + 10 > transTime(video_len)
      ? transTime(video_len)
      : transTime(time) + 10;
  };

  let time = pos;
  for (let co of commands) {
    time = opCheck(time);
    if (co === 'prev') time = secToTime(goPrev(time));
    else time = secToTime(goNext(time));
    time = opCheck(time);
  }

  return time;
}
