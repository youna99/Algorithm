// readline 모듈 이용해서 직각삼각형 출력하기

const readline = require('readline'); // readline모듈 불러오기
const rl = readline.createInterface({ // rl 인터페이스 설정
    input: process.stdin, // 표준 입력 사용
    output: process.stdout // 표준 출력 사용
});

let input = []; // 입력을 저장할 배열 선언

rl.on('line', function(line) { // rl 인터페이스에서 line 이벤트 리스너를 설정
    // 콘솔에 한 줄을 입력하면, 해당 줄이 line 이벤트에 의해 전달
    input = line.split(' '); // 입력된 문자열을 공백을 기준으로 나누어 input 배열에 저장.
    // 즉, readline 인터페이스에서 line 이벤트가 발생할 때마다 호출될 콜백함수 정의
}).on('close', function() { // close 이벤트 리스너 설정
    // 사용자가 입력을 완료하고 rl.close()를 호출하면 close 이벤트가 발생
    const num = Number(input[0]); // input[0]을 숫자로 변환하여 num 변수에 저장
    let logStr = '' //logStr 문자열 초기화
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            logStr += '*'
        }
        logStr += '\n'
    }
    console.log(logStr);
})

/* 
    입력값: 3
    line.split(' ')는 ["3"]배열을 생성하고 input에 저장.
    input[0]의 값을 숫자로 변환하여 num에 저장. 여기서 num은 3이 됨.
    i = 0일 때,
    j = 0, logStr에 * 추가 줄바꿈 -> *\n이 반복
*/