// 函数重载,在java中，可在class中定义
// 相同名称，不同参数类型的函数

function dosomething(action:string):void;
function dosomething(actions:string[]):void;
function dosomething(actions:number):void;

function dosomething(action){
    if(typeof action === "string"){
        console.log("action is string")
    }
    if(Array.isArray(action)){
        console.log("action is array")
    }
}
dosomething(["1","2"])

dosomething("!!")

dosomething(1)

// ###############等价###############
function dosomething2(action:string|number|string[]){

}
dosomething2(["1","2"])

dosomething2("!!")

dosomething2(1)