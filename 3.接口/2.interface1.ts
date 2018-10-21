// 继承接口
interface coord{
    x:number;
    y?:number;// 可选属性
    [index:string]: number | string; // 数组类型 这数组类型适合于数组和dictionary模式
}
interface coord3 extends coord{ // 接口之间的继承需要用extends
    z:number;
}
// 返回可选属性
let coor : coord = {
    x:1,
    age:12,
    0:false, // error
}
