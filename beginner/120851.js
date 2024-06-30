// 숨어있는 숫자의 덧셈(1)

function solution(my_string) {
    let arrMy_string = [...my_string]; // 문자열을 spread를 통해 배열로
    let num = '123456789'; // 숫자를 변수에 저장
    let result = 0;
    let numMy_string = arrMy_string.filter((arr) => num.includes(arr)) // num이 배열에 포함되어있으면 배열로 그 요소들을 배열로 반환
    .map((arr) => Number(arr)); // 문자열이기때문에 배열에 있는 요소들을 숫자로 바꿔줌.
    for (let i = 0; i < numMy_string.length; i++) { // 배열에 숫자들을 다 더해줌
        result += numMy_string[i]
    }
    return result;
};