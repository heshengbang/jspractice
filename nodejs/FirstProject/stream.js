/**
 * Created by hehu on 2017/7/17.
 */
// var fs = require("fs");
// var data = '';
//
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding("UTF8");
// readerStream.on('data', function (chunk) {
//     console.log("1 - "+data+" - "+chunk);
//     data += chunk;
// });
//
// readerStream.on('end', function () {
//     console.log("2");
//     console.log(data);
// });
//
// readerStream.on('error', function (err) {
//     console.log("3 - "+err);
//     console.log(err.stack);
// });
//
// console.log("程序执行完毕");


// var fs = require("fs");
// var data = '铜和尚:https://github.com/tongheshang';
//
// var writerStream = fs.createWriteStream('output.txt');
// writerStream.write(data, 'UTF8');
//
// writerStream.end();
//
// writerStream.on('finish', function () {
//     console.log("写入完毕");
// });
//
// writerStream.on('error', function (err) {
//     console.log(err.stack);
// });
// console.log("程序执行完毕");


// var fs = require("fs");
// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('output.txt');
//
// readerStream.pipe(writerStream);
//
// console.log("程序执行完毕");

//压缩input.txt文件
// var fs = require("fs");
// var zlib = require("zlib");
//
// fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
//
// console.log("程序压缩完毕");

var fs = require("fs");
var zlib = require("zlib");

var readStream = fs.createReadStream('input.txt.gz');
readStream.pipe(zlib.createGunzip()).pipe(fs.createWriteStream("input.txt"));

readStream.on('error', function (error) {
    console.log(error.stack);
});
console.log("文件解压完毕");

