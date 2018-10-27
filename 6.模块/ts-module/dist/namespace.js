"use strict";
//
var OwnSpace;
(function (OwnSpace) {
    OwnSpace.var_a = 'own_space_a';
})(OwnSpace || (OwnSpace = {}));
// export const aa = ""
// 模拟window的全局变量,
(function (OwnSpace) {
    OwnSpace.var_b = 'own_space_b';
    var inner_b = "inner_B";
})(OwnSpace || (OwnSpace = {}));
var a = {
    name: "aa"
};
