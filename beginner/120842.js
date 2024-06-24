// 2차원 만들기

function solution(num_list, n) {
    let answer = [];
    for(let i = 0; i < num_list.length/n; i++) { // 안쪽 배열 수 만큼 반복
        answer.push(num_list.slice(i * n, i * n + n)); // slice는 배열로 반환한다.
    } return answer;
};