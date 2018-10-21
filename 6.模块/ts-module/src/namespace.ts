
//
namespace OwnSpace{
  export let var_a = 'own_space_a';
}

// export const aa = ""
// 模拟window的全局变量,
namespace OwnSpace{
    export let var_b = 'own_space_b';
    let inner_b = "inner_B"
}
 
interface OwnSpace{
  name:string;
}

let a : OwnSpace = {
  name:"aa"
}