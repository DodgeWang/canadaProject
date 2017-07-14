var fs = require('fs');
var path = require('path');
var formidable = require('formidable'); //文件上传
var activity = require('../proxy/activity.proxy');
var resUtil = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');

/**
 * 获取活动列表
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.getList = function(req, res, next) {
	if (!req.query.classifyId || !req.query.page || !req.query.size) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    var classifyId = Number(req.query.classifyId);
    var page = Number(req.query.page);
    var size = Number(req.query.size); 
    activity.getList(classifyId,page,size,function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(rows, config.statusCode.STATUS_OK));
    })
}

/**
 * 根据ID删除活动
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.deleteData = function(req, res, next){
    if (!req.query.id) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    var id = Number(req.query.id)
    activity.deleteData(id,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })
}



/**
 * 添加新活动
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.add = function(req, res, next) {
    console.log(req.body)
   if(!req.body.title  || !req.body.imgpath || !req.body.url || !req.body.classifyId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
   var data = {
        title: req.body.title,
        url: req.body.url,
        imgpath: req.body.imgpath,
        classifyId: parseInt(req.body.classifyId)
    }
    activity.add(data,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
       res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })

}


/**
 * 修改活动
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.edit = function(req, res, next) {
   if(!req.body.id || !req.body.title  || !req.body.imgpath || !req.body.url || !req.body.classifyId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
   var data = {
        id: parseInt(req.body.id),
        title: req.body.title,
        url: req.body.url,
        imgpath: req.body.imgpath,
        classifyId: parseInt(req.body.classifyId)
    }
    activity.edit(data,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
       res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })

}