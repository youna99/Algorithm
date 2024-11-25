// 붕대 감기
// PCCP 기출문제

// t초 동안 붕대를 감으면서 1초마다 x만큼 체력 회복
// t초 연속 붕대 감기 성공 시 y만큼 체력 추가 회복
// 현재 체력 = 최대 체력보다 클 수 없음

// 몬스터엑 공격을 당할 때
// 기술 쓰는 도중 당하면 기술 취소
// 공격 당하는 순간 체력 회복 X
// -> 연속 성공 시간 0으로 초기화
// 정해진 피해량만큼 현재 체력 줄어듬 (현재 체력 0 이하 시 더 이상 회복 불가)

// bandage = [시전 시간, 1초당 회복량, 추가 회복량] (1차원 배열)
// health: 최대 체력
// attacks: 몬스터의 공격 시간, 피해량 (2차원 배열)
// 남은 체력 return
// 몬스터 공격을 받고 캐릭터의 체력이 0이하라면 -1 return

// 시도..
// function solution(bandage, health, attacks) {
//   maxAttackNum = bandage[0]; // 시전 시간 (최대로 연속 공격 성공 횟수로 가질 수 있는 수)
//   sHealth = bandage[1]; // 1초당 회복량
//   addHealth = bandage[2]; // 추가 회복량

//   const plusHealth = () => {

//     for (let i = 0; i < attacks[attacks.length-1]; i++) {
//         if (maxAttackNum) {}
//     }
//     health += sHealth;
//   };
// }

// 풀이 1
// function solution(bandage, health, attacks) {
//   // nowhealth = 현재 체력
//   let nowhealth = health - attacks[0][1]; // 1번째 공격

//   if (nowhealth <= 0) {
//     // 1공격만에 죽은 경우
//     return -1;
//   } else {
//     // 2번째 공격
//     for (let i = 1; i < attacks.length; i++) {
//       // minusTime = 현재 공격과 이전 공격의 시간차이
//       let minusTime = attacks[i][0] - attacks[i - 1][0] - 1;
//       // 이번 공격을 받기 직전의 회복된 상태를 만들려는 것이므로 -1이 필요

//       nowhealth +=
//         minusTime * bandage[1] + parseInt(minusTime / bandage[0]) * bandage[2];
//       // 시간차이 * 초당 회복량 + 연속성공횟수 * 추가 회복량

//       nowhealth = nowhealth > health ? health : nowhealth;
//       // 회복된 체력이 최대체력을 넘는 경우 최대체력으로 맞추기

//       nowhealth -= attacks[i][1];
//       // 공격받음

//       // 죽었으면 -1 리턴
//       if (nowhealth <= 0) {
//         return -1;
//       }
//     }
//   }
//   return nowhealth;
// }

// 풀이 2
function solution(bandage, health, attacks) {
  let currHealth = health; // 현재 체력
  let currTime = 0; // 마지막 공격이 처리된 시간

  // attack 배열의 각 요소를 반복적으로 꺼내 사용
  for (let [attackTime, damage] of attacks) {
    // 이전 공격 시간과 현재 공격 시간 사이에 남은 회복 가능한 시간을 구함
    // 공격 전까지 회복 가능한 시간이므로 -1
    let diffTime = attackTime - currTime - 1;

    // diffTime * bandage[1] : 매초 마다 bandage[1] 만큼 회복
    // Math.floor(diffTime / bandage[0]) * bandage[2] : bandage[0]초마다 추가 회복되는 체력 bandage[2]를 더함
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;

    // 공격 피해 반영
    currHealth -= damage;

    if (currHealth <= 0) return -1;

    // 현재 시간 갱신
    currTime = attackTime;
  }

  return currHealth;
}
