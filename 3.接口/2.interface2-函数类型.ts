// 接口可以用来描述一个函数,所以使用函数的时候也可以用
type Db =string;

interface InitFunc{
    (option:Db):string// 定义函数的参数是Db类型 ，在函数类型中的参数名可以任意取，即使后期声明函数时参数名不一样（理论熵来说，最好保持名称一致，好维护），但是类型要一致
}
// 方法1
let fun1:InitFunc = function(ops:string){
    return ops
}
fun1("qq")
// 方法2
let fun2:(opt:Db)=>string = (opt)=>{
    return opt
}

// 赋值不能乱赋值
interface func11{
    (x:number):number
}


let add6:func11
add6 = (x) =>{
    return x
}

let add7 =(xss)=>{

}
add6 = add7 // 报错 不能赋值空返回值给ad6类型

// 3、混合类型 既有函数也有属性
interface func3 {
    (value:string):number
    value1:number
}

let somefunc;
somefunc = (value:string):func3=>{
    let object = <func3>function(value){return 1}
    object.value1 = 10 
    return object
}
console.log(somefunc("a").value1); 
