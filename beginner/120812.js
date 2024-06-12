// 최빈값 구하기

let array = [1, 2, 3, 3, 3, 4];

function solution(array) {
    const counting = new Map();
    // 생성자를 이용하여 새로운 Map객체 생성(Map객체는 내장 객체로 {key:value}로 이루어짐.)
    array.forEach(num => {
        if(counting.has(num)) {
            // Map객체에 num(key)가 존재하는 확인(true, false 반환)
            // 즉, Map객체에 num이 있으면,
           counting.set(num, counting.get(num)+1)
           // set메서드: Map객체를 반환. -> Map객체에 새로운 값을 반환
           // get메서드: 특정 요소를 반환. num은 반환받을 요소(값)의 키
           // Map객체에서 num 키에 해당하는 값을 1 증가시켜서 다시 counting(Map) 객체에 저장 
           } else {
                  counting.set(num, 1)
                  // num이 없다면, num 키를 추가하고 값을 1로 설정.
           }
    });
    const max = Math.max(...counting.values());
    // Map객체의 값을 각각의 요소로 반환. -> [1, 1, 3, 1] -> '1, 1, 3, 1' 이 중 큰 값을 max 변수에 저장.
    let count = 0;
    let result = 0;
    
    // 현재 counting(=Map) 객체 상태 -> {1=>1, 2=>1, 3=>3, 4=>1}

    for (const [key, value] of counting) {
        if(max === value) {
            // max(= 3)이 value와 같으면, 다음을 실행.
            count++;
            result = key;
        }
    }
    if(count > 1) {
        // 만약 count가 1보다 크면 최빈값이 중복이므로 -1를 반환.
        return -1;
    } else {
        return result;
        // 그렇지않으면, 최빈값 result를 반환함.
    }
};