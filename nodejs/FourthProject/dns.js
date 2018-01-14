/**
 * Created by hehu on 2017/8/7.
 */
var dns = require('dns');
dns.lookup("www.weibo.com", function onLookup(err, address, family) {
    console.log('ip 地址：', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 '+address+':'+JSON.stringify(hostnames));
    });
});