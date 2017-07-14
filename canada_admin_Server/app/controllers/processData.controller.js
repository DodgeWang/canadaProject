var fs = require('fs');
var path = require('path');
var formidable = require('formidable'); //文件上传
// var parsingTxtFiles = require('../func/parsingTxtFiles.js') //解析上传的txt文件
var processData = require('../proxy/processData.proxy.js');
var user = require('../proxy/user.proxy.js')
var resUtil = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');



/**
 * 导入学生数据到数据库
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.importData = function(req, res, next) {
    var form = new formidable.IncomingForm();

    // console.log(__dirname)  //__dirname值当前文件所在路径
    // console.log(process.cwd())  //process.cwd()是当前执行node命令时候的文件夹地址
    //设置编辑
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = process.cwd() + '/uploadFile/dataFile'; //保存文件上传路径
    //保留后缀
    form.keepExtensions = true;
    //设置单文件大小限制    
    form.maxFieldsSize = 2 * 1024 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和


    form.parse(req, function(err, fields, files) {
        if (err) return res.redirect(303, '/error');

        //打印上传内容
        // console.log('received fields:');
        // console.log(fields);
        // console.log("----------------")
        // console.log('received files:');
        // console.log(files);

        //文件上传时间戳
        var t = new Date().getTime();
        //生成随机数
        var ran = parseInt(Math.random() * 8999 + 10000);
        //拿到扩展名
        var extname = path.extname(files.file.name);
        //旧的路径名
        var oldpath = files.file.path;
        //新的路径名
        var newpath = process.cwd() + '/uploadFile/dataFile/' + t + ran + extname;

        //改名
        fs.rename(oldpath, newpath, function(err) {
            if (err) {
                throw Error("改名失败");
            }

            //读取文件数据并解析存入指定数据库（文件类型，文件路径）
            // parsingTxtFiles.parsingTxtFiles(fields.fileType,newpath);


            fs.readFile(newpath, { flag: 'r+', encoding: 'utf8' }, function(err, data) {
                if (err) {
                    console.error(err);
                    return;
                }
                var Infolist = data.split("\r\n");
                var excellist = [];
                for (var i = 0; i < Infolist.length - 1; i++) {
                    var dataList = Infolist[i].split(/\t/);
                    excellist.push(dataList)
                }
                //存入数据库
                processData.importData(excellist, function(err, rows) {
                    if (err) {
                        return res.json(resUtil.generateRes(null, {
                            code: 4,
                            msg: '导入数据格式错误'
                        }));
                    }
                    
                    return res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
                })



            });

        });
    });


}