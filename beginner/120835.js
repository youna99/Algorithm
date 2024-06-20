// 진료순서 정하기
// 배열을 내림차순하고 새로운 배열에 index값 넣기

function solution(emergency) {
    let copiedEmergency = [...emergency].sort((a, b) => b - a);
    // sort(): 배열요소를 원하는 정렬 순서로 변경함. (기존 배열을 수정)
    // 따라서 기존 배열을 복사한 후 sort() 적용
    // [8, 6, 5, 3]
let rankArr = new Array(emergency.length).fill(0);
// 진료 순위를 기록할 배열 생성
// [0, 0, 0, 0]
let count = 1; // 진료 순위 1로 초기화

for(let i = 0; i < emergency.length; i++) {
    // 내림차순만 배열은 가장 우선 순위가 높은 사람이 맨 앞에 있음.
    // 기존 배열에서 해당 요소의 인덱스를 찾는다.
    let index = emergency.indexOf(copiedEmergency[i]);
    // 진료순위 배열에서 해당 인덱스 자리에 진료 순위를 기록함.
    // 첫 번째 반복에서는 index = 2
    rankArr.splice(index, 1, count); // rankArr = [0, 0, 1, 0]
    count++; // 진료 순위 증가
}

 return rankArr;
}

// 더 간단한 코드



// sort() 함수

// 1. 오름차순 코드
// arr.sort(a, b => a -b);
// 반환값이 0보다 크면 a가 뒤, 0보다 작으면 a가 앞

// 2. 내림차순 코드
// arr.sort(a, b => b - a);
// 반환값이 0보다 크면 b가 앞, 0보다 작으면 b가 뒤