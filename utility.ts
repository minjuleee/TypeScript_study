interface Address {
  email : string;
  address : string;
}

const myEail1:Address = {
  email : "",
  address : ""
}

// Partial
// interface의 강제성을 없애고, 옵셔널의 특성을 가지게 만든다.
type MyEmail = Partial<Address>
const partialEmail:MyEmail = {
  address : ""
}

// Omit
// 특정 속성만 제거하고 싶을 때 사용하는 문법이다.
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type shoppingItem = Omit<Product, "stock" | "brand">
const myNoteBook:shoppingItem = {
  id : 1,
  name : "노트북",
  price : 20000000
}

// Pick
// 특정 속성을 가져와서 새로운 타입을 만들고 싶을 때 사용하는 문법이다.
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type MyProduct = Pick<Product, "name" | "price">
const myPhone:MyProduct = {
  name: "아이폰",
  price : 2000000
}
