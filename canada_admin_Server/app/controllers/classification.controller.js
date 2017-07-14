var classification = require('../proxy/classification.proxy');
var resUtil  = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');


/**
 * 获取图文分类列表
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.getList = function(req, res, next) {

    classification.getList(function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        
        res.json(resUtil.generateRes(rows, config.statusCode.STATUS_OK));
    })
}




/**
 * 添加图文分类
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.add = function(req, res, next) {
	if(!req.body.name) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    classification.add(req.body.name,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
       res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })
}



/**
 * 修改图文分类名
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.revise = function(req, res, next) {
	if(!req.body.id || !req.body.name  || !req.body.homeshow) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
	var data = {
		id:parseInt(req.body.id),
		name:req.body.name,
        homeshow:req.body.homeshow
	}
    classification.revise(data,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
       res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })
}