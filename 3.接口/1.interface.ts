// 参数限制
interface coord{
    x:number;
    y:number
}

function drawPoint({x,y}:coord){
    console.log('x :', x);
    console.log('y :', y);
}

drawPoint({x:10,y:20})


// 接口的特点2 在参数内部可以
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
console.log(labelledObj);//{ size: 10, label: 'Size 10 Object' }
console.log(labelledObj.size);//error 这里的获取属性必须是接口中定义的属性
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


// 接口的特点2 在参数内部可以

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
let newSquare = {color: "white", area: 100};
if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
}
if (config.width) {
    newSquare.area = config.width * config.width;
}
return newSquare;
}

// let mySquare = createSquare({color: "black",width:123,clor:"aa"});
let obj = {color: "black",width:123,clor:"aa"}
let mySquare2 = createSquare(obj);


