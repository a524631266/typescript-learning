// 类基本功能是能够继承，这无可厚非，就不讲了
// 讲各种限定符的继承
//1. private
class Animal2{
    constructor(private name){

    }
    move(){
        console.log(this.name) // 可以在类中访问，但是实例无法直接get
    }   
}

let a = new Animal2("aa")
a.move()
// a.name// error
// 1.1private 继承 ，继承的子类不能访问name 更不用说实例了
class Horse extends Animal2{
    move(){
        // console.log(this.name) // error 
    }
}


//2 . protect 行为类似与private，但是能够在子类中访问
class AnimalPro{
    constructor(protected money){}
}
class HorseP extends AnimalPro{
    move(){
        console.log(this.money)
    }
}
let hp = new HorseP(1000)
hp.move() //1.能访问1000
hp.money // 2.error 与private一致
// 2.1 protect constructor
class AnimalPro1{
    protected constructor(public name:string){}
}
let ap1 = new AnimalPro1("11")// 不能直接声明
class Ap1 extends AnimalPro1{
    constructor(public name:string){
        super(name)// 能够继承并一定要在子类中声明构造器
    }
    move(){
        console.log(this.name)
    }
}
let ap2 = new Ap1("11")


//3. 默认就是public

