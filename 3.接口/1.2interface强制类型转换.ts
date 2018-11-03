//3 转换类型 只会转换类型而不会转换数据
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
    console.log(config)// other: "red", width: 100 仍然显示other这个值
    return {
        color:config.color,
        area:20
    }
}

let mySquare = createSquare2({ other: "red", width: 100 } as SquareConfig);
console.log(mySquare)//{ color: undefined, area: 20 }