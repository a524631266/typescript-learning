let func1 = function(){
    console.log("func 1")
}

function func2(){
    console.log("func 2")
}
let func3 = function func4(){ // 左边优先级高于
    console.log("func3 && func4")
}

console.log(func3 === func4) // 1/找不到func4 
// 2. 函数化 看 interfact2-函数
// 3. 参数可选(name?:string)与默认(name:string=zhangll)
// 4. 剩余参数 Es6



function a(){
    console.log(this.a)
}
a()
a.a = "2"
