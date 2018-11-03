// 类的静态属性可以直接通过类调用
// 也就是说类本身就是对象，对象可以直接调用
// function a(){} a.name ="aa"

class StaticClass{
    static coord = {width:100,height:200}
    constructor(public color){}
    draw(){
        console.log(`this canvas has ${StaticClass.coord.width} width`)

        console.log(`this canvas has ${StaticClass.coord.height} height`)
        
    }
}

new StaticClass("white").draw()