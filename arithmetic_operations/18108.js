let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let y = parseInt(input[0]);
console.log(y - 543);
