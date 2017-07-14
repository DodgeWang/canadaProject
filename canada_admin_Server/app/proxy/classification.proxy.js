var mysql = require('../../config/mysql');


/**
 * 获取图文分类列表    
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.getList = function(callback) { 
   var sqls = "SELECT * FROM tbl_indexclassification";
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(err, null);
        }

        if (rows && rows.length > 0) {
            callback(null, rows);
        } else {
            callback(null, []);
        }
    })
}


/**
 * 添加图文分类
 * @param  {string}   name   新添加的分类名     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.add = function(name,callback) { 
   mysql.query({
        sql: "INSERT INTO tbl_indexclassification (name,homeshow) VALUES ( :name, 1)",
        params  : {
           "name": name
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}


/**
 * 修改图文分类名
 * @param  {obj}   data   包含id(分类id),name(修改的名称)     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.revise = function(data,callback) { 
   mysql.query({
        sql: "UPDATE tbl_indexclassification SET name = :name,homeshow = :homeshow WHERE id = :id",
        params  : {
           "name": data.name,
           "id": data.id,
           "homeshow": data.homeshow
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}
