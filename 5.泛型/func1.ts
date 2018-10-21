interface tt {
    <T>(args:T):T
}

function some<T>(args:Array<T>):T{
    return args[0]
}  
let some1 = some(["a",1])
let some2 = some<number>([1,2])
console.log('some2 :', some2);

function ss2:tt(args) {
    return args
}