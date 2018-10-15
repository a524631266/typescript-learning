export class Baby{
    private _name:string;

    constructor(name) {
        this._name = name;
        console.log("wwwwwwwwwww");
    }
    static smile(){
        console.log("hahahahah");
    }
    public getName():string{
        return this._name;
    }
}

export let baby = new Baby("zll");