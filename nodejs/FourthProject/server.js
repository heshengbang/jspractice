/**
 * Created by hehu on 2017/8/7.
 */
var net = require('net');
var server = net.createServer(function (connection) {
    console.log('client connected');
    connection.on('end', function () {
        console.log('客户端关闭链接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(8080, function () {
    console.log('server is listening');
});