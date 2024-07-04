// 한 번만 등장한 문자

function solution(s) {
    let sArr = s.split("");
    let f = [];
    for (let arr of sArr) { // sArr 배열의 각 문자를 arr라는 이름으로 반복
        if(f[arr]) { // 현재 문자(요소)가 f에 존재하면
            f[arr]++; // 그 해당 문자의 빈도값을 1 증가
        } else { // 없다면
            f[arr] = 1; // 그 해당 문자의 빈도값을 1로 설정
        }
    };
    const uniq = sArr.filter(arr => f[arr] === 1);
    // sArr배열에서 빈도가 1인 문자만 필터링하여 새로운 배열 반환
    uniq.sort(); // 오름차순 정렬
    return uniq.join('');
};


// 다른 풀이 (다양한 내장메소드 활용)

function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            // indexof(): 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환
            // lastindexof(): 배열에서 주어진 값을 발견할 수 있는 마지막 인덱스 반환
            // 문자열의 특정 문자가 처음 나온 인덱스와 마지막에 발견된 인덱스가 같다.
            // 중복된 문자가 있다면 처음 나온 인덱스와 마지막에 발견된 인덱스가 다를것
            answer.push(s[i])
        }
    } return answer.sort().join('')
};