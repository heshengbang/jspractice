var fs = require("fs");

/*
fs.readFile('input.txt', function(err, data) {
	if (err)
		return console.error(err);
	console.log(data.toString());
	
})

console.log("程序执行结束！");
*/

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束！");

exports.world = function () {
	console.log("Hello World");
};

function Hello() {
	var name;
	this.setName = function (thyName) {
		name = thyName;
    };
    this.sayHello = function () {
		console.log("Hello "+name);
    };
}

module.exports = Hello;
