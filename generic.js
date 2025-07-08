"use strict";
// 제네릭(generic) 이란?
// - 재사용성 높은 컴포넌트를 만들 때 사용되며, 한가지 타입보다
// 여러 타입에서 동작하는 컴포넌트를 생성하는데 사용하는 문법
// 1. 어떤 타입을 받을 건지 먼저 정의: genericText<T>
// 2. params 타입을 정의 : value:T
// 3. return 타입을 정의: ():T
function genericText(value) {
    console.log(value);
    return value;
}
// 화살표 함수(타입 가드)
const genericText2 = (value) => {
    if (typeof value === "string") {
        return value.length; // number
    }
    return value;
};
// 값이 들어갈 때 타입이 결정되는 문법
const strLength = genericText2("abc");
const someValue = genericText2(true);
console.log(strLength);
console.log(someValue);
const myFunc2 = (value) => {
    return value;
};
let myFunc = myFunc2;
const result1 = myFunc(true);
const getProductItems = (item) => {
    return item;
};
getProductItems("name");
const getProductItems2 = (item) => {
    // 비즈니스 로직
    return item;
};
const item = {
    name: "노트북",
    price: 2000000,
    stock: 2000
};
getProductItems2(item);
