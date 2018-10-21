
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







