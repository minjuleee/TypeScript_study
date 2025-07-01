"use strict";
console.log("Hello, World!");
console.log("안녕! 타입스크립트!");
// 함축형 문법(implicit type assertion)
// 값을 통해 타입을 알려준다.
let strImpl = "string value"; // string
let numImpl = 0.7; //number
let boolImpl = false; //boolean
let arrayImpl = [1, 2, 3, 4]; // number[]
strImpl = "10";
numImpl = 10;
boolImpl = true;
arrayImpl = [10]; // string[]
// 설명형 문법 (explicit type annotation)
let strExpl = "string value";
let numExpl = 52.2;
let boolExpl = true;
let arrayExpl = [1, 2, 3, 4];
console.log(strExpl);
console.log(numExpl);
console.log(boolExpl);
console.log(arrayExpl);
