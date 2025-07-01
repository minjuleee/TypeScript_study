"use strict";
// 설명형 문법
const explicitObject = {
    attr1: 10,
    attr2: "some value",
    attr3: () => {
        return 10 > 11;
    }
};
explicitObject.attr1 = 100;
// explicitObject.attr1 = "100"
// 프로퍼티의 key, value 타입이 항상 동일하다면, 아래와 같이 작성한다.
const indexSignObject = {
    attr1: "some value",
    attr2: "some value",
    attr3: "some value",
    attr4: "some value",
    attr5: "some value",
    attr6: "some value",
};
const limitedSignObject = {
    attr1: 10,
    // att4 : 100,
};
