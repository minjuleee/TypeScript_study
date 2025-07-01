"use strict";
// 함축형 문법
function implicitReturnFunc() {
    return 1234;
}
const implicitArrowFunc = () => {
    return "some value";
};
let result = implicitReturnFunc();
let arrowResult = implicitArrowFunc();
// 설명형 문법 
function explicitReturnFunc() {
    return false;
}
const explicitArrowFunc = () => {
    return [true];
};
// 매개변수
function funcWithParamas(num1, num2, num3) {
    return num1 + num2 + num3;
}
const funcWithParamas2 = (num1, num2, num3) => {
    return (num1 + num2 + num3).toString();
};
console.log(funcWithParamas(10, 20, 30), typeof (funcWithParamas(10, 20, 30)));
console.log(funcWithParamas2(20, 30, 40), typeof (funcWithParamas2(20, 30, 40)));
// 옵셔널 : 값이 없어도 안전하게 return 
const funcWithOptional = (num1, num2, num3) => {
    if (num2 === undefined) {
        return num1;
    }
    if (num3 === undefined) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
};
console.log(funcWithOptional(1));
console.log(funcWithOptional(1, 4));
console.log(funcWithOptional(1, 4, 6));
// Rest Parameter
const funcWithParam3 = (...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};
