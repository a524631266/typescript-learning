function dosomething(action:string):void;
function dosomething(actions:string[]):void;

function dosomething(action){
    if(typeof action === "string"){
        console.log("action is string")
    }
    if(Array.isArray(action)){
        console.log("action is array")
    }
}
dosomething(["1","2"])