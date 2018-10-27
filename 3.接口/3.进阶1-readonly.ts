
interface DB{
    host:string;
    port:number;
    connect(password:string,username:string):void;
}
//  ****************  readonly *****************
class MySql2 implements DB{
    readonly host:string; // readonly 是在初识话(constructor)之后不能改变的 
    port:number;
    constructor(host,port){
        this.host = host
        this.port = port
    }
    connect():void{
        console.log(this.host,this.port)
        this.host = "222" // error
    }
}
let mysql2 = new MySql2(111,333)
mysql2.host = "2222" //error

//  ****************  readonly2 *****************
interface Point{
    readonly x:number;
    readonly y:number;
}

let points:Point = {x:10,y:20}
console.log(points)
points.x = 20 //error 不能分配



// ***************  readonly3 array*****************
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error! 不能修改数组的元素
ro.push(5); // error! 不能向数组添加数据
ro.length = 100; // error! 不能修改数组属性
a = ro; // error! 不能赋值到一个普通数组
a = ro as number[] // right 强制类型转换1
a = <number[]>ro // right 墙砖类型转换2

// 浅拷贝
let ro1:ReadonlyArray<number[]> = [[1],[2]]
ro[0][1] = 10 // 可以修改
console.log(ro1)

// readonly 与 const
// 其实 const是更适合用在变量上,而readonly适用于属性
