// protect 是被保护的 姓氏  可以被继承
// private 是所有的 私房钱
// 在外部不能访问的 只能在类(也是内存对象)中访问

class Dad{
    protected surname;
    private pocket;
    constructor(){}
    private say():void{
        console.log("this is my wife")
    }
}

class Son extends Dad{
    constructor(){
        super()
        this.surname // 可以访问 但是 pocket无法访问
        // this.say() // error 
    }
    // say(){
            
    // }
}

let son = new Son()
// son.surname error 
// son.say() error


// 在属性前不添加限制(default) 也就是 public

