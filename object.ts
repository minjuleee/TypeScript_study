// 설명형 문법
const explicitObject: {
  attr1: number,
  attr2: string,
  attr3: () => boolean
} = {
  attr1 : 10,
  attr2 : "some value",
  attr3 : () => {
    return 10 > 11
  }
}

explicitObject.attr1 = 100
// explicitObject.attr1 = "100"

// 프로퍼티의 key, value 타입이 항상 동일하다면, 아래와 같이 작성한다.
const indexSignObject:{[index: string]: string} = {
  attr1 : "some value",
  attr2 : "some value",
  attr3 : "some value",
  attr4 : "some value",
  attr5 : "some value",
  attr6 : "some value", 
}

//  indexSignObject.attr7 = "10"

// key를 제한 - 원치 않는 key 값 막아줌
type ExampleType = "attr1" | "attr2" | "attr3";
const limitedSignObject:{[key in ExampleType]?: number} = {
  attr1 : 10,
  // att4 : 100,
}
