// 抽象类 
// 其作为其他的子类使用,可以只有标签,可以提供实现

// 部门是个概念,它需要有个名字,且都能打印本部门的名字(通用方法),但是各自用有不同的会议内容
abstract class DepartMent{
    constructor(public name:string){// public name 默认在类中添加 public name;声明

    }
    printName(){ // 可以实现方法
        console.log(`my department name is ${this.name}`)
    }
    abstract printMeeting():void; // 只有标签,没有实现,但是继承类需要实现的
}

// 部门分很多中,有财务部门 .. 实现

class FinanceDepartMent extends DepartMent{
    printMeeting(){
        console.log("today we finance are kk")
    }
    other(){
        console.log("oohter")
    }
}

let fd:DepartMent = new FinanceDepartMent("as")
fd.printMeeting()
fd.printName()
console.log('object :', fd.name); 
fd.other() // fd 抽象类 没有other 如果实例
(<FinanceDepartMent>fd).other() // 即使被强制转换也没用,找不回来了

let fdd = new FinanceDepartMent("aa")
fdd.other()// 可以