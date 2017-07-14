var user = require('../proxy/user.proxy');
var student = require('../proxy/student.proxy');
var resUtil = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var nodemailer = require('nodemailer'); 
var devConfig = require('../../config/config');



/**
 * 查询用户列表
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.getList = function(req, res, next) {
    if (!req.query.page || !req.query.size) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    var page = Number(req.query.page);
    var size = Number(req.query.size);
    user.getList(page, size, function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(rows, config.statusCode.STATUS_OK));
    })

}

/**
 * 重置用户密码
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.resetPassword = function(req, res, next) {
    if (!req.body.userId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));

    user.resetPassword(req.body.userId, function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })

}



/**
 * 更新用户
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.updateUser = function(req, res, next) {

    student.getList(function(err, data) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }

        if (data.length === 0) return res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));

        var createTime = Date.parse(new Date()) / 1000;



       
        for(var i=0;i< data.length;i++){
            data[i].passwordstr = addNumber(6);
        }
        // console.log(data)

        importfunc(0, data, createTime, function() {

            user.newList(createTime, function(err, rows) {
                if (err) {
                    return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
                }
                
                outer:
                for(var s=0;s<rows.length;s++){
                    inter:
                    for(var g=0;g<data.length;g++){
                        var us = data[g].surname+data[g].given_name+data[g].student_num
                        if(rows[s].username == us){
                            rows[s].password = data[g].passwordstr;
                            break inter;
                        }
                    }  
                }
                console.log("this.data:", rows)

                if(rows.length>0){
                    var emailCont = "";
                    for (var i = 0;i<rows.length;i++){
                        var itemDom = "<tr><td>"+rows[i].username+"</td><td>"+rows[i].password+"</td></tr>"
                        emailCont += itemDom;
                    }
                    emailCont = "<table>"+emailCont+"</table>"
                    sendEmail(emailCont);
                }

                return res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
            })


        })

    })
}



function importfunc(i, obj, createTime, callback) {
    user.importUser(obj[i], createTime, function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        if (i === obj.length - 1) {
            return callback()
        } else {
            i += 1;
            return importfunc(i, obj, createTime, callback)
        }
    })
}


//随机生成六位数
function addNumber(_idx) {
    var str = '';
    for (var i = 0; i < _idx; i += 1) {
        str += Math.floor(Math.random() * 10);
    }
    return str;
}







function sendEmail(content){
var transporter = nodemailer.createTransport({  
  service: devConfig.email.server,  
  auth: {  
    user: devConfig.email.sender,  
    pass: devConfig.email.licenseCode //授权码,通过QQ获取  
  
  }  
  });  
  var mailOptions = {  
    from: devConfig.email.sender, // 发送者  
    to: devConfig.email.receiver, // 接受者,可以同时发送多个,以逗号隔开  
    subject: '新生成用户账号密码', // 标题  
    // text: 'Hello world'// 文本  
    html: content   
  };  
  
  transporter.sendMail(mailOptions, function (err, info) {  
    if (err) {  
      console.log(err);  
      return;  
    }  
  
    console.log('发送成功');  
  });  
  } 