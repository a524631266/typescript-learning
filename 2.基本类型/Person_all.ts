enum Choose{
    Wife,
    Mother
}
enum Contact{
    Address="",
    Tel = 0,
}
type Address = string
type Tel = number

class Person{
    private name:String;
    age:number;
    labels:Array<string>;
    wives:string[];
    contact:[Address,Tel];
    other:any;
    saveMother:boolean = true;// 设置布尔,并设置true 默认值
    constructor(){}
    answer():Choose{
        if (this.saveMother){
            return Choose.Mother
        }else{
            return Choose.Wife
        }
    }
    hello():void{
        console.log("my name is",this.name)
    }
    setName(name:string):void{
        this.name = name
    }
    empty(){}
    err():never{
        // while (true) {
        //     console.log(11)
        // }
        throw new Error("aaa")
    }
}

let person = new Person()
// person.name = "zhangll"
person.setName("zhangll")
console.log(person.answer());
person.hello(); 

// person.err()

person.other = "adadadad"
let len = (<string>person.other).length // 强制类型转换,前面加<type>
console.log(len)

let len2 = (person.other as string).length // 强制类型转换,前面加<type>
console.log('len2 :', len2);