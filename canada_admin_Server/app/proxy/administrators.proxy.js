var mysql = require('../../config/mysql');
var encryption = require("../func/encryption");


/**
 * 后台管理员登陆
 * @param  {string}   username   用户名     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.login = function(username,callback) {
   mysql.query({
        sql: "SELECT * FROM tbl_administrators where username = :username",
        params  : {
           "username": username
        }
    }, function(err, rows) {
        if (err) {
            callback(err, null);
        }

        if (rows && rows.length > 0) {
            callback(null, rows[0]);
        } else {
            callback(null, null);
        }
    })
}


/**
 * 后台管理员修改登陆密码
 * @param  {number}   Id   用户id 
 * @param  {string}   password   用户新密码   
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.resetPassword = function(Id,password,callback) {
   var newPass = encryption.md5(password,32);
   mysql.query({
        sql: "UPDATE tbl_administrators SET password = :newPass WHERE id = :Id",
        params  : {
           "newPass": newPass,
           "Id": Id
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}