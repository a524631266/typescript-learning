// 第一个文件一个baby
// 生产一个baby,并会哭....

class Baby{
    constructor(){
        console.log("wa wa wa wa wa wa wa!!");
    }
}

let baby = new Baby() // 此时new 一个就会调用constructor python中的__init__
// a)ts-node baby.ts 执行
// b)编译文件 tsc baby.ts
// b1) 给js文件生成定义文件,会代码提示 tsc baby.ts -d 

