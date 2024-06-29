// 소인수분해

function solution (n) {
    let result = []; // 소인수를 넣을 빈 배열
    let i = 2; // 소수는 2부터 시작이므로 초기값을 2로 설정

    while(n >= 2) { // n이 2부터 시작이라 n >= 2가 참일 때까지 while 반복문 실행
        if(n % i == 0) { // 나머지자 0이면 약수
            result.push(i); // 그 값을 배열에 넣음
            n /= i; // 몫을 계속해서 나누어줘야함.
        } else i++; // 만약 나머지가 0이 아니라면 i의 값을 하나 올림.
    }
    return [...new Set(result)];
    // 반복문을 반복하면 중복값이 들어가므로
    // new Set()를 이용하여 중복 없는 객체로 만들고
    // 배열로 반환해야하니까 spread 사용.
};