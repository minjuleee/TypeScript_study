"use strict";
// enum
// 상수를 모아놓은 형태이며, 값에 의미를 부여함으로써 오타를 방지한다.
// 기본적으로 인덱스는 0으로 시작하여 1씩 증가한다.
var NumbericExplicitDirection;
(function (NumbericExplicitDirection) {
    NumbericExplicitDirection[NumbericExplicitDirection["UP"] = 10] = "UP";
    NumbericExplicitDirection[NumbericExplicitDirection["DOWN"] = 11] = "DOWN";
    NumbericExplicitDirection[NumbericExplicitDirection["LEFT"] = 12] = "LEFT";
    NumbericExplicitDirection[NumbericExplicitDirection["RIGHT"] = 13] = "RIGHT";
})(NumbericExplicitDirection || (NumbericExplicitDirection = {}));
NumbericExplicitDirection.UP;
