"use strict";
exports.__esModule = true;
var Baby = /** @class */ (function () {
    function Baby(name) {
        this._name = name;
        console.log("wwwwwwwwwww");
    }
    Baby.smile = function () {
        console.log("hahahahah");
    };
    Baby.prototype.getName = function () {
        return this._name;
    };
    return Baby;
}());
exports.Baby = Baby;
exports.baby = new Baby("zll");
