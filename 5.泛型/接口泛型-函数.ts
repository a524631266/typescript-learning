interface ff{
    <T>(a:T):T
}
// 声明变量的函数 1
let func1:ff = function func2(args){
    return args
}
// 声明变量的函数 2 在变量上直接用箭头函数
let func2:<T>(a:T[])=>T = function func2(args){
    return args[0]
}

func2([1,2])

// 接口 上的泛函 这是对接口的一种限制

interface ff2<T>{
    (args:T):T;
}
let func3:ff2<string> = function(args){ // 不能用T
    return args
}
func3("dad")

// 多接口泛型
interface ff3<T,U>{
    (args:T):U;
}
let func4:ff3<string,number> = function(args){ // 不能用T
    return 1
}
func3("dad")