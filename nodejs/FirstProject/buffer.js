/**
 * Created by hehu on 2017/7/14.
 */
// var buf = new Buffer(256);
// for (var i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii', 0, 5));
// console.log(buf.toString('utf8', 0, 5));
// console.log((buf.toString(undefined, 0, 5)));

/// / var buf = new Buffer('www.runoob.com');
// var json = buf.toJSON();
// console.log(json.type);

// var buffer1 = new Buffer('菜鸟教程');
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3内容："+buffer3);

// var buffer1 = new Buffer('ABCD');
// var buffer2 = new Buffer('ABCD');
// var result = buffer1.compare(buffer2);
// console.log("result :" + result);
// if (result < 0) {
//     console.log(buffer1 + " 在 " + buffer2 + "之前");
// } else if (result === 0) {
//     console.log(buffer1 + " 与 " + buffer2 + "相同");
// } else {
//     console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

var buffer1 = new Buffer('ABCDEFG');
var buffer2 = new Buffer(2);
buffer1.copy(buffer2,0,0,3);
console.log("buffer2 content : "+buffer2.toString());
console.log(buffer1.slice(2,6).toString());
console.log(buffer1.length);