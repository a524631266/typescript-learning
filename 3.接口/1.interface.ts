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