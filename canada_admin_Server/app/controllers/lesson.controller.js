var lesson = require('../proxy/lesson.proxy');
var resUtil  = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var encryption = require("../func/encryption");

/**
 * 获取课程列表
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.list = function(req, res, next) {

    lesson.list(function(err,rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        for(var i = 0; i<rows.length; i++){
        	rows[i].start_date = dateStr(rows[i].start_date);
        	rows[i].end_date = dateStr(rows[i].end_date);
        }
        res.json(resUtil.generateRes(rows, config.statusCode.STATUS_OK));       
    })
}



/**
 * 修改指定课程信息
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.edit = function(req, res, next) {
    console.log(req.body)
	var param = ['id','startDate','endDate','startTime','endTime','weekly'];
	for(var i = 0; i<param.length; i++){
       if(!req.body.hasOwnProperty(param[i])){
       	  return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
       }; 
	}
    lesson.edit(req.body,function(err,rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));       
    })
}


/**
 * 时间转换为固定类型
 * @param  {object}   date  日期
 * @return {null}        
 */
function dateStr(date){
    var year = date.getFullYear();
    var month = (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
    var date = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    return year+'-'+month+'-'+date;
}