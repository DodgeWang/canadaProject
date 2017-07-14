var mysql = require('../../config/mysql');


/**
 * 获取课程列表    
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.list = function(callback) { 
   var sqls = "SELECT * FROM tbl_lesson";
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
 * 修改指定课程信息    
 * @param  {object} data 课程信息
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.edit = function(obj,callback) { 
   var sqls = "UPDATE tbl_lesson SET start_date=:startDate,end_date=:endDate,start_time=:startTime,end_time=:endTime,weekly=:weekly WHERE id=:id";
   mysql.query({
        sql: sqls,
        params: {
           "id": obj.id,
           "startDate": obj.startDate,
           "endDate": obj.endDate,
           "startTime": obj.startTime,
           "endTime": obj.endTime,
           "weekly": obj.weekly
        }
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