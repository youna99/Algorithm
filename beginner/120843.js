// 공 던지기

function solution (numbers, k) {
    let answer = 1;
    // 무조건 처음 던지는 번호는 1번이니까 answer의 초기값으로 1 설정.
    for (let i = 0; i < k - 1; i++) {
        // k는 공을 던지는 번째
        // 1번이 이미 1번째로 던지니까 k - 1를 해야함.
        answer += 2;
        // 오른쪽으로 한 명을 건너뛰고 그 다음 사람에게 던짐.
        if (answer > numbers.length) answer -= numbers.length
        // 만약에 맨 끝 자리까지 왔으면 다시 번호가 작아지므로
        // 현재 번호가 배열의 길이를 넘어가게 되면
        // 현재 번호 - 배열의 길이를 다시 현재 번호에 저장
    } return numbers[answer - 1]
    // 그냥 현재 번호를 리턴해도 되지만
    // 현재 번호의 인덱스를 출력하는 방법.
};