// protect 是被保护的 姓氏  可以被继承
// private 是所有的 私房钱
// protect与private在外部(实例中)不能访问的 只能在类(也是内存对象)中访问
// private只能本类中找,protect可以被子类找
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




// 当接口继承了一个类的私有(private)方法或保护(protected)方法
// 那么这个接口就拥有了该类的成员属性(非实现,因为接口没有具体实现)
// 那么这个接口只有这个类的子类[拥有private/protected成员的该类是不行的]才能实现
class Control {
    private state: any;
}
class Control2 {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}


class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image2  implements SelectableControl {
    select() { }
}

class Location2 {
}
