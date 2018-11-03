// 可以在函数中的第一个参数中添加this，此时在调用函数的时候是隐藏的

function aa(this,name:string){
    console.log(this,name)
}

aa("aa")