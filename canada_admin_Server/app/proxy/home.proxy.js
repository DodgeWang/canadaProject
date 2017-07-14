var mysql = require('../../config/mysql');


/**
 * 添加首页图片 
 * @param  {String} imgpath 图片路径   
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.bannerAdd = function(imgpath,callback) { 
   mysql.query({
        sql: "INSERT INTO tbl_banner (path) VALUES (:path)",
        params  : {
           "path": imgpath
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}

/**
 * 获取最新的首页图片 
 * @param  {String} imgpath 图片路径   
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.getBanner = function(callback) { 
   mysql.query({
        sql: "SELECT * FROM tbl_banner order by id desc LIMIT 1",
        params  : {}
    }, function(err, rows) {
        if (err) {
            callback(err,null);
        }
        if (rows && rows.length > 0) {
            callback(null, rows[0]);
        } else {
            callback(null, null);
        }
    })
}