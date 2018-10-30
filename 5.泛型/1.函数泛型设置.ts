// 例子1 
interface tt {
    <T>(args:T):T
}
let ss2:tt=(args)=>{
    return args
}




//例2 数组类型

// a)
function someA<T>(args:Array<T>):T{
    return args[0]
}  
// b)
function someB<T>(args:T[]):T{
    return args[0]
}  
let some1 = someA(["a",1])
let some22 = someA<number>([1,2])
console.log('some2 :', some22);


