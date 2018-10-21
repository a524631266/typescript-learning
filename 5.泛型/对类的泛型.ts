class Pers<T,U,F>{
    name:T;
    age:U;
    address:F;
    constructor(name,age,address){
        this.name = name
        this.age = age
        this.address = address
    }
}
let newp = new Pers<number,string,number>(1,2,3)
newp.age