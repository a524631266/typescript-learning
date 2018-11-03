// getter / setter

let passcode = "secret passcode2";

class Employee {
    private _fullName: string;
    constructor(name:string){
        this._fullName = name
    }
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
            
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let emp = new Employee("zhangll")

console.log('====================================');
console.log(emp.fullName);
console.log('====================================');
emp.fullName = "zhangll2"

console.log('====================================');
console.log(emp.fullName);
console.log('====================================');