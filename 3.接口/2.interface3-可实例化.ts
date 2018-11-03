interface ClockConstructor {
    new (hour: number, minute: number);
}
// 静态类实现接口不会实例话实例，也就会出现无法找到类型匹配的说法
class Clock implements ClockConstructor { // 报错
    currentTime: Date;
    constructor(h: number, m: number) { }
}
// 实例化的时候可以检测
interface canInstantify{
    new (year:number,month:number,day:number):DateClass
}

interface MyDate{
    year:number,
    month:number,
    day:number
}
class DateClass implements MyDate{
    year:number;
    month:number;
    day:number;
    constructor(year:number,month:number,day:number){
        this.year = year
        this.month = month
        this.day = day
    }
    toString(){
        this.year
    }
}

function factoryDate(Class:canInstantify,{year,month,day}):DateClass{//约束可以实例化的类型
    return new Class(year,month,day) // 检测实例化
}
console.log(factoryDate(DateClass,{year:1000,month:200,day:300}))