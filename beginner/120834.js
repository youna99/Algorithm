// 외계행성의 나이

//a는 0, b는 1, c는 2, ..., j는 9입니다.
//예를 들어 23살은 cd, 51살은 fb로 표현

function solution(age) { // ex) age = 23
    let ageArr = String(age).split('');
    // 숫자를 문자열로 바꾸는게 핵심!
    // 문자열로 바꿨으니 split함수를 이용해 str를 쪼개서 배열로 저장 // ['2', '3']
    let agealp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let result = '';

    for (let i = 0; i<ageArr.length; i++) {
        let index = ageArr[i]; // ageArr[0]의 값인 2를 index에 저장
        result += agealp[index]; // agealp[2]의 값인 c를 result에 저장
        // 이 과정을 age의 length만큼 반복
    }
    return result;
};
// 'cd'


// 다른 풀이

function solution(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])
      // 각각의 요소에 대해
      // 2: abcdefghij의 인덱스 2에 해당하는 문자 매핑
      // 있는 요소만큼 반복
      .join(""); // 배열을 문자열로
  }