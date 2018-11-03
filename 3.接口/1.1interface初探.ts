// 1、 类型检测器在编译前检查类型
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
    // console.log(labelledObj.size);// 报错，虽然有size，但是ts的类型检查器在代码编译前直接报错的，
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 2、接口即使合同条约，还没有执行的时候先前限定，这也是ts的核心

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
console.log(labelledObj.label);
}

let myObj2 = {size: 10, label: "Size 10 Object"};
printLabel2(myObj2);






