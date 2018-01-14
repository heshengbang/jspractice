/**
 * Created by hehu on 2017/8/11.
 */
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"springlogin"
});
connection.connect();
//查询全部
// connection.query("select * from user", function (error, results, fields) {
//     if (error) {
//         console.log("[select error] - ", error.message);
//         return;
//     }
//     console.log('--------------------------SELECT----------------------------');
//     console.log(results);
//     console.log('------------------------------------------------------------\n\n');
// });

//插入一条数据
// var addSql = "insert into user(id, first_name, last_name, nickname, password) values (0,?,?,?,?)";
// var addSqlParams = ["zuxian","wang","Niexiaoqian","password"];
// connection.query(addSql, addSqlParams, function (err, result) {
//     if (err) {
//         console.log("[INSERT ERROR] - ", err.message);
//         return;
//     }
//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);
//     console.log('INSERT ID:',result);
//     console.log('-----------------------------------------------------------------\n\n');
// });
//更新一条数据
// var modSql = "update user set first_name = ?, last_name = ? where id = ?";
// var modSqlParams = ["Wang","Zuxian",0];
// connection.query(modSql, modSqlParams, function (err, result) {
//     if (err) {
//         console.log("[UPDATE ERROR] - ", err.message);
//         return;
//     }
//     console.log('--------------------------UPDATE----------------------------');
//     console.log('UPDATE affectedRows',result.affectedRows);
//     console.log('-----------------------------------------------------------------\n\n');
// });
//删除一条数据
var delSql = "Delete from user where id=0";
connection.query(delSql, function (err, result) {
    if (err) {
        console.log("[DELETE ERROR] - ",err.message);
        return;
    }
    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
connection.end();