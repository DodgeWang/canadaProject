var administrators = require('../proxy/administrators.proxy');
var resUtil  = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var encryption = require("../func/encryption");

/**
 * 后台管理员登陆
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.login = function(req, res, next) {
	if(!req.body.username || !req.body.password) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));

    administrators.login(req.body.username,function(err,rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        if(!rows){
        	//登陆账号不存在
        	return res.json(resUtil.generateRes(null, config.AdminStatus.USER_ERROR));
        }

        var password = encryption.md5(req.body.password,32);

        if(password == rows.password){
        	//登陆账号密码都正确
        	req.session.administrator = rows;
        	res.json(resUtil.generateRes(rows, config.AdminStatus.SUCCESS));
        }else{
        	//登陆密码错误
            res.json(resUtil.generateRes(null, config.AdminStatus.PASSWORD_ERROR));
        }  
        
    })
}



/**
 * 获取管理员信息
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.managerInfo = function(req,res,next) {
    var data = {
        id: req.session.administrator.id,
        username: req.session.administrator.username
    }
    res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK))
}


/**
 * 退出后台登陆
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.exit = function(req,res,next) {
    delete req.session.administrator;
    res.json(resUtil.generateRes(null, config.AdminStatus.EXIT_SUCCESS))
}


/**
 * 修改管理员密码
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.resetPassword = function(req,res,next) {
    if(!req.body.oldpassword || !req.body.newpassword) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    if(encryption.md5(req.body.oldpassword,32) !== req.session.administrator.password) return res.json(resUtil.generateRes(null, config.AdminStatus.RESET_ERROR));
    administrators.resetPassword(req.session.administrator.id,req.body.newpassword,function(err,rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        delete req.session.administrator;
        res.json(resUtil.generateRes(null, config.AdminStatus.RESET_SUCCESS));
    })
}