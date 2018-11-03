// 什么是构造函数 如下

let Greeter1 = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
// 相当于 是下面的类的定义的写法
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
// 实质熵 类定义的写法不仅会生成构造函数

// 同时会产生一个类的类型 ts嘛
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};