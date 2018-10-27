//#####1.  数字枚举 numeric 
enum Direction{
    UP=1,
    DOWN, // 自动填充为2
    Left, // 自动填充为3
    Right, // 自动填充为4
    up2=9,
    up3,// 自动填充为10
}

console.log(Direction.up3)//10
console.log(Direction[3])// reverse enums
// ##########2. 混合类型 (heterogeneous enums)
// enums without initializers either need 
// to be first, or have to come after numeric
// enums initialized with numeric constants 
// or other constant enum members. 
let getSomeValue=()=>{
    return 7
}
enum E{
    B , // 没有初始化值的需要在第一位或者,在常量枚举类型(数字,字符串)之后
    A = getSomeValue(),
    C = 4// 必须初始化
}

console.log(E.B)
//#########3.字符串枚举 string 
// 字符串不像数字能够自动增加,因此在字符串之后需要声明初始化
// Keep in mind that string enum members do not get a reverse mapping generated at all.
enum Direction2{
    A,
    UP ="UP",
    Down ="DOWN",
    LeftA = "LEFT",
    Right = "Right",
    // up //
}


console.log(Direction2.Down);
// console.log(Direction2["LEFT"])// 没有reverse enum

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length,
}
console.log(FileAccess.None); 





// 进阶

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind:0,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}

//  #####4.ambient
declare enum Enum {
    A = 1,
    B,
    C = 2
}

