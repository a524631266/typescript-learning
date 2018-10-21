// 继承接口
interface coord{
    x:number;
    y?:number;// 可选属性
}
interface coord3 extends coord{ // 接口之间的继承需要用extends
    z:number;
}
// 返回可选属性
let coordss:coord = {
    x:1
}

class Pointer implements coord3{ // 实现需要用imple
    x:any = 0;
    // y:number = 0;
    z:number = 0;
    
    print():void{
        console.log("coord3",this.x,this.z)
    }
}

let point = new Pointer()
point.print()