"use strict";
// any type
// 어떤 타입이 들어오든 상관이 없을 때 사용하는 타입
// 하지만 TypeScript의 장점이 모두 사라지기 때문에,
// 꼭 필요한 상황에서만 사용한다.
let anyType = "some value";
anyType = 21;
anyType = {
    a: "a",
    b: "b",
    c: "c"
};
// 타입 검증 오류 예시
let myAnyType = 3;
let myString = myAnyType;
console.log(typeof myString);
const myAnyTypeFunc = (myAnyType) => {
    return myAnyType;
};
console.log(myAnyTypeFunc(myAnyType));
// any타입과 as를 같이 쓰지 않는다.
