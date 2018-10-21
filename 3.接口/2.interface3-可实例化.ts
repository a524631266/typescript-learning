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
    return new Class(year,month,day)
}
console.log(factoryDate(DateClass,{year:1000,month:200,day:300}))