//  约束了泛型的可以继承接口规范

interface hasLength{
    length:number
}


function add<T extends hasLength>(args:T):T{
    return args
    // return args.reduce(
    //     (pre,current)=>{
    //         return pre+current
    //     },0)
}

add([1,2,3])

