// 배열의 유사도

function solution(s1, s2) {
    return s1.filter((e) => s2.includes(e)).length
    // s1 배열에 s1 요소(e)가 s2에 포함되어있는 요소를 배열로 반환되는데
    // 그 배열의 length를 return
};


// filter 함수
// 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수
// arr.filter(() => {})

// includes 함수
// arr.includes(탐색할 요소, 탐색을 시작할 위치(기본값 0))
// 반환값: boolean 값