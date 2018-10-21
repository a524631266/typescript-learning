// 接口可以用来描述一个函数,所以使用函数的时候也可以用
type Db =string;

interface InitFunc{
    (option:Db):string// 定义函数的参数是Db类型
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

