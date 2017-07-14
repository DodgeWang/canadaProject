var mysql = require('../../config/mysql');


/**
 * 查询学生列表    
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.getList = function(callback) {
   mysql.query({
        sql: "SELECT id,surname,given_name,student_num FROM tbl_studentinfo order by id desc",
        params  : {}
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