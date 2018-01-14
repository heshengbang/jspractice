/**
 * Created by hehu on 2017/8/2.
 */
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log("__________________________");
console.log(util.inspect(obj, true));