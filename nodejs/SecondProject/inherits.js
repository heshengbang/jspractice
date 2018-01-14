/**
 * Created by hehu on 2017/8/2.
 */
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
console.log("------------------------------------");
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);