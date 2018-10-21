function say1({x,y}={x:0,y:2}){
    console.log('x :', x);
    console.log('y :', y);
}

function say2({x=0,y=8}){
    console.log('x :', x);
    console.log('y :', y);
}


function say3({x=1,y=2} = {x:2,y:2}){
    console.log('x :', x);
    console.log('y :', y);
}

say1()
say1({x:10,y:20}) //err

say2({})
say2({x:10,y:20})


say3()
say3({})
say3({x:10})