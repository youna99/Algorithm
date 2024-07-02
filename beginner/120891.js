// 3 6 9 게임

// 내가 푼 답

function solution(order) {
    let orderArr = [...String(order)]; // 숫자인 order를 문자열로 바꿔주고 배열로 저장
    let result = 0; // 3 6 9의 개수를 세는 변수 0으로 초기화
    for(let i = 0; i < orderArr.length; i++) {
        if(orderArr[i] == 3 || orderArr[i] == 6 || orderArr[i] == 9) {
            result++
        }
    } return result
};


// 참고하면 좋을 코드

function solution(order) {
    const mySet = new Set([3, 6, 9]); // Set 객체 선언
    // : 중복을 제거하는 객체, 특정값이 존재하는지 여부를 확인할 때 좋음
    return String(order).split('')
    // 숫자인 order를 문자열로 바꾸고 ''를 기준으로 쪼개서 배열로 저장
                        .filter(num => mySet.has(Number(num)))
                        // 배열안의 문자열 요소를 숫자로 바꾸고
                        // mySet에 그 숫자가 있는지 확인 후 새로운 배열에 넣음
                        .length;
                        // 반환한 새로운 배열의 길이를 반환!
};