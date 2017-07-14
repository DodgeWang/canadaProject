var fs = require('fs');
var path = require('path');
var formidable = require('formidable'); //文件上传
var resUtil = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var sysConfig = require('../../config/env/development');

/**
 * 上传活动图片
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.upload = function(req, res, next) {
    // console.log(req)
    var form = new formidable.IncomingForm();
    // console.log(__dirname)  //__dirname值当前文件所在路径
    // console.log(process.cwd())  //process.cwd()是当前执行node命令时候的文件夹地址
    //设置编辑
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = process.cwd() + '/uploadFile/picture'; //保存文件上传路径
    //保留后缀
    form.keepExtensions = true;
    //设置单文件大小限制    
    form.maxFieldsSize = 200 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和
    form.parse(req, function(err, fields, files) {
        if (err) return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        // console.log(fields)
        // console.log(files)
        //文件上传时间戳
        var t = new Date().getTime();
        //生成随机数
        var ran = parseInt(Math.random() * 8999 + 10000);
        //拿到扩展名
        var extname = path.extname(files.file.name);
        //旧的路径名
        var oldpath = files.file.path;
        //新的路径名
        var newpath = process.cwd() + '/uploadFile/picture/' + t + ran + extname;
        //改名
        fs.rename(oldpath, newpath, function(err) {
            if (err) {
                throw Error("改名失败");
                return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
            }
            var data={path:'http://'+sysConfig.server.ip+':'+sysConfig.server.port+'/uploadFile/picture/' + t + ran + extname};
            res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));
        })

        
    })
}


/**
 * 上传首页banner图片
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.bannerUpload = function(req, res, next) {
    var form = new formidable.IncomingForm();
    //设置编辑
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = process.cwd() + '/uploadFile/banner'; //保存文件上传路径
    //保留后缀
    form.keepExtensions = true;
    //设置单文件大小限制    
    form.maxFieldsSize = 200 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和
    form.parse(req, function(err, fields, files) {
        if (err) return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        // console.log(fields)
        // console.log(files)
        //文件上传时间戳
        var t = new Date().getTime();
        //生成随机数
        var ran = parseInt(Math.random() * 8999 + 10000);
        //拿到扩展名
        var extname = path.extname(files.file.name);
        //旧的路径名
        var oldpath = files.file.path;
        //新的路径名
        var newpath = process.cwd() + '/uploadFile/banner/' + t + ran + extname;
        //改名
        fs.rename(oldpath, newpath, function(err) {
            if (err) {
                throw Error("改名失败");
                return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
            }
            var data={path:'http://'+sysConfig.server.ip+':'+sysConfig.server.port+'/uploadFile/banner/' + t + ran + extname};
            res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));
        })

        
    })
}