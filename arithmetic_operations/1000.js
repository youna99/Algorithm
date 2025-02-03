let fs = require('fs');
// 표준 입력값을 받아 처리
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a + b);
