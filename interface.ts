// 추상화
export interface Animal {
  species: string;
  canSpeak: boolean;
  numberOfLegs?: number; // 다리가 없을수도 있으니까 -> 옵셔널 !
}

interface Mammal extends Animal {
  name : string;
  age : number;
}

// 객체화
const myDog: Animal = {
  species: "Dog",
  canSpeak: false, 
  numberOfLegs: 4, // 선택사항
}

// 상속
const MyHuman: Mammal = {
  species: "MyHuman",
  canSpeak: false,
  numberOfLegs: 2,
  name: "홍길동",
  age: 20
}

// fixed value
interface Machine {
  powerLevel: number;
  material: "matal" | "plastic"
}

const myMachine: Machine = {
  powerLevel : 9000,
  material : "matal"
}

// Union types
// | : 세 가지 타입을 유동적으로 바꿀 수 있다.
// 단 한가지 타입을 반드시 만족해야 하며, 섞어서 사용하는 것도 가능하다.
// & : 모든 타입의 속성을 합치고 싶을 때 사용한다.

// &&를 실무에서 많이 사용함
type MyUnionType = Animal & Machine & Mammal;
type MyUnionType2 = Animal | Machine | Mammal;
type MyUnionType3 = number | string;

const myUnionVar: MyUnionType = {
  age : 10,
  canSpeak : false,
  numberOfLegs : 4,
  material : "matal",
  name : "홍길동",
  powerLevel : 10,
  species : "인조인간"
}

const myUnionVar2: MyUnionType2 = {
  species : "동물",
  canSpeak : true,
  powerLevel : 10
}

// type intersect
// 선택 타입과 필수 타입이 같은 이름으로 정의되어 있다면,
// 필수 타입으로 적용된다.
interface Type1 {
  prop1: number;
  prop2?: string;
}

interface Type2 {
  prop2: string;
  prop3: number;
}

type Hybird = Type1 & Type2;
const myData:Hybird = {
  prop1 : 10,
  prop2 : "",
  prop3 : 30,
}
