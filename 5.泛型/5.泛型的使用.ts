interface StoreCreator{
    <T,Z extends number>(T,Z):T
    <T,U extends string,Z extends number>(T,U,Z):T
}

let createStore:StoreCreator;


createStore = (a:number,b:number)=>{
    return b
}
createStore = (a:number,b:string,c:number)=>{
    return a
}

console.log(createStore("1","")); 

// createStore = (a:number,b:number)=>{
//     return b
// }