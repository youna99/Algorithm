// 영어가 싫어요

// 1)
// numbers = zeroonetwothree
function solution(numbers) {
    const strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    strNum.forEach((nums, index) => {
        // num: strNum 요소 (차례로 들어올 현재 요소)
        // index: 인덱스
        numbers = numbers.split(nums).join(index)
        // numbers.split('zero') = ['', 'onetwothree']
        // ['', 'onetwothree'].join('0') = '0onetwothree'
        //--------------------
        // numbers.split('one') = ['0', 'twothree']
        // ['0', 'twothree'].join('1') = '01twothree'
        // ....
    });
    return Number(numbers); // 문자열이니까 숫자로 변환 
};

//2)
function solution(numbers) {
    const strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    strNum.forEach((nums, index) => {
        numbers = numbers.replaceAll(str, idx);
        // str를 idx로 바꿈
    });
};