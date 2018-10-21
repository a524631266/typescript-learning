interface DB{
    host:string;
    port:number;
    connect(password:string,username:string):void; // 接口定义方法
}

class MySql implements DB{
    host:string;
    port:number;
    constructor(host,port){
        this.host = host
        this.port = port
    }
    connect():void{
        console.log(this.host,this.port)
    }
}
let mysql = new MySql(111,333)
mysql.connect()