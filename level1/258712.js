// 가장 많이 받은 선물 (카카오 인턴십)

// 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달 선물양 예측

// ex)
// A -> B 5번
// B -> A 3번
// 다음달) B -> A 1번
// 하나도 없거나 같다면 선물 지수가 큰 사람이 작은 사람에게 하나 받음 (작은 -> 큰 1번)
// 선물지수 = 준 선물 수 - 받은 선물 수
// 선물지수까지 같다면 다음 달에는 선물을 주고받지 않음.

// friend: 친구 이름 (1차원 배열)
// gifts: 친구들이 주고받은 선물 기록 (1차원 배열)

// # 개념 정리
// 1. new Array() : Array() 생성자 -> 새로운 Array 객체 생성
// ex) 원소가 1개이고 숫자인 경우
// new Array(3); => 배열 크기로 사용(배열 크기 : 3)
// Array.from( , )
// 첫번째 인자는 배열로 만들 이터러블한 객체, 두번째 인자는 생성한 배열의 모든 원소에 대해 수행할 맵핑함수

// 2. Map 객체
// - 키-값 쌍의 삽입 순서를 기억
// new Map() 맵 생성
// map.set(key, value) key를 이용해 value 저장
// map.get(key) key에 해당하는 값을 반환 (key가 없다면 undefined)
// map.has(key) key가 존재하면 true, 존재하지않으면 false 반환
// map.delete(key) key에 해당하는 값 삭제
// map.clear() 맵 안에 모든 요소 제거
// map.size 요소의 개수 반환

function solution(friends, gifts) {
  // friends = ["a", "b", "c"]
  let len = friends.length; // 친구들 수 // len = 3
  const nameMap = new Map(); // 이름을 인덱스에 매핑
  const giftTable = Array.from({ length: len }).map(() =>
    new Array(len).fill(0)
  ); // 친구들끼리 주고받은 선물 내역 저장 (2차원 배열 - len * len)
  // len 길이의 배열 생성 후 0으로 채움
  // [[0,0,0], [0,0,0], [0,0,0]]
  const rankInfo = new Array(len).fill(0); // 선물지수 계산하는 1차원 배열
  const nextMonth = new Array(len).fill(0);

  // 친구들의 이름과 idx를 map에 set함
  friends.forEach((name, idx) => {
    nameMap.set(name, idx);
  });
  // a -> 0, b -> 1, c -> 2

  // 선물 내역 저장
  gifts.forEach((info) => {
    const [from, to] = info.split(' ');
    giftTable[nameMap.get(from)][nameMap.get(to)]++;
  });

  // 선물 지수 계산
  // i줄: 선물 주기 +1
  // j줄: 선물 받기 기존 선물 지수에서 -1
  for (let i = 0; i < len; i++) {
    rankInfo[i] = giftTable[i].reduce((a, b) => a + b, 0);
    for (let j = 0; j < len; j++) {
      rankInfo[i] -= giftTable[j][i];
    }
  }

  // 다음달 받을 선물 수 계산
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) continue;
      if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
      if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
        if (rankInfo[j] < rankInfo[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}
