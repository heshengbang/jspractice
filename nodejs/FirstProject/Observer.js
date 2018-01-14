var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('Connect Successfully.');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log('Data received successfully.');
});

eventEmitter.emit('connection');
console.log('Program excute completely.');