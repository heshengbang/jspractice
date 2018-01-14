/**
 * Created by hehu on 2017/8/2.
 */
var fs = require("fs");
console.log("查看 /develope 目录");
fs.readdir("/develope/", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (file) {
        console.log(file);
    });
});