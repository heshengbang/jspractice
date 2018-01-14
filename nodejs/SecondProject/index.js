/**
 * Created by hehu on 2017/7/27.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);