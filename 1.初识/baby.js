// 第一个文件一个baby
// 生产一个baby,并会哭....
var Baby = /** @class */ (function () {
    function Baby() {
        console.log("wa wa wa wa wa wa wa!!");
    }
    return Baby;
}());
var baby = new Baby(); // 此时new 一个就会调用constructor python中的__init__
// a)ts-node baby.ts 执行
// b)编译文件
