// 제네릭(generic) 이란?
// - 재사용성 높은 컴포넌트를 만들 때 사용되며, 한가지 타입보다
// 여러 타입에서 동작하는 컴포넌트를 생성하는데 사용하는 문법

// 1. 어떤 타입을 받을 건지 먼저 정의: genericText<T>
// 2. params 타입을 정의 : value:T
// 3. return 타입을 정의: ():T
function genericText<T>(value:T):T{
  console.log(value) 
  return value
}

// 화살표 함수(타입 가드)
const genericText2 = <T>(value:T):T | number => {
  if(typeof value === "string"){
    return value.length; // number
  }
  return value;
}

// 값이 들어갈 때 타입이 결정되는 문법
const strLength = genericText2<string>("abc")
const someValue = genericText2<boolean>(true)
console.log(strLength)
console.log(someValue)

interface GenericLogTextfn {
  <T>(value:T):T;
}

const myFunc2 = <T>(value:T):T => {
  return value
}

let myFunc:GenericLogTextfn = myFunc2;

const result1:boolean = myFunc(true)

// 제네릭으로 들어온 타입을 정의한 키 타입으로만 사용하도록 제한하고 싶을 때
interface ProductItems {
  name : string;
  price : number;
  stock : number;
}

const getProductItems = <T extends keyof ProductItems>(item: T):string|number => {
  return item
}

getProductItems<"name">("name")

const getProductItems2 = <T extends ProductItems>(item:T):T => {
  // 비즈니스 로직
  return item
}

const item:ProductItems = {
  name: "노트북",
  price: 2000000,
  stock: 2000
}

getProductItems2<ProductItems>(item)