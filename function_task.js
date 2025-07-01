"use strict";
// 1. 두 수를 받아서 A와 B의 대소 비교 후
// 큰 값을 알려주는 함수
const findMax = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
};
console.log(findMax(5, 8));
const getMax = (num1, num2) => {
    if (num1 === num2)
        return "두 수가 같습니다";
    return num1 > num2 ? `더 큰 값: ${num2}` : `더 큰 값: ${num2}`;
};
// 2. 입력한 값을 모두 문자열로 연결시켜주는 함수
const concatAll = (...strings) => {
    let total = "";
    for (let str of strings) {
        total += str;
    }
    return total;
};
console.log(concatAll("안녕", "하세여", "여러분"));
function getConcat(...content) {
    let result = "";
    for (let c of content) {
        result += c;
    }
    return result;
}
