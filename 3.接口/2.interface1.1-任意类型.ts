// 1. 正常情况下的接口
//   问题 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string;area:number}{
    let result = {"area":0,"color":"red","widht":111}
    if(config.width){
        result["area"] = config.width * 100
    }
    if(config.color){
        result["color"] = config.color
    }
    return result;
    // return {"area":0,"color":"red","width":111} // 1.width 无法返回,因为字面量 
}

let sq = createSquare({color:"white",width:1000,height:2000}) // 2.height 无法在字面量中赋值

// 2. 为了使得字面量对象能够正常传递 代表任一数量的其他属性值

interface SquareConfig2{
    color?:string;
    width?:number;
    [propName:string]:any;//代表任一数量的其他属性值 代表属性名为字符串类型,同事属性值为any类型
}


interface Square{
    color?:string;
    area?:number;
    [propName:string]:any;//代表任一数量的其他属性值 代表属性名为字符串类型,同事属性值为any类型
}


function createSquare2(config:SquareConfig2):Square{
    
    let result = <Square>{} // 可以定义给square类型的对象,也可以理解为个对象强转为Square类型,类似于 <number>[]
    
    if(config.width){
        result["area"] = config.width * 100
    }
    if(config.color){
        result["color"] = config.color
    }
    return result;
    // return {"area":0,"color":"red","width":111} 
}

let sq2 = createSquare2({color:"white",width:1000,height:2000}) // 2.height 无法在字面量中赋值
console.log(sq2)
