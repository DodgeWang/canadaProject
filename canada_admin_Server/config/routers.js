var processData = require('../app/controllers/processData.controller');
var user = require('../app/controllers/user.controller');
var classification = require('../app/controllers/classification.controller');
var administrators = require('../app/controllers/administrators.controller');
var activity = require('../app/controllers/activity.controller');
var imgUpload = require('../app/controllers/imgUpload.controller');
var lesson = require('../app/controllers/lesson.controller');
var home = require('../app/controllers/home.controller');

module.exports = function(app) {

    /**
     * html page routers
     */
    //登陆页面
    app.get('/login', function(req, res) {
       res.sendfile('public/login.html')
    });
    //首页
    app.get('/index', function(req, res) {
        res.sendfile('public/index.html')
    });
    //用户管理页面
    app.get('/userManager', function(req, res) {
        res.sendfile('public/tpls/userManager.html')
    });
    app.get('/administrator', function(req, res) {
        res.sendfile('public/tpls/administrator.html')
    });
    //活动管理页面
    app.get('/activity', function(req, res) {
        res.sendfile('public/tpls/activityManagement.html')
    });
    //添加活动页面
    app.get('/addActivity', function(req, res) {
        res.sendfile('public/tpls/addActivity.html')
    });
    //导入数据页面
    app.get('/importData', function(req, res) {
        res.sendfile('public/tpls/importData.html')
    });
    //修改管理员密码页面
    app.get('/resetPassword',function(req, res) {
        res.sendfile('public/tpls/resetPassword.html')
    });
    //分类页面列表
    app.get('/classificationList', function(req, res) {
        res.sendfile('public/tpls/classificationList.html')
    });
    //添加分类页面
    app.get('/addClassification', function(req, res) {
        res.sendfile('public/tpls/addClassification.html')
    });
    //课程页面
    app.get('/lessonManage', function(req, res) {
        res.sendfile('public/tpls/lessonManage.html')
    });
    //首页图片管理
    app.get('/homeImg', function(req, res) {
        res.sendfile('public/tpls/homeImg.html')
    });
    



    /**
     * api routers
     */
    app.post('/admin/login',administrators.login);//后台管理员登录  

    app.get('/admin/managerInfo',administrators.managerInfo);//获取管理员信息

    app.get('/admin/exit',administrators.exit);  //退出后台系统 

    app.post('/admin/resetPassword',administrators.resetPassword);  //修改管理员密码

    app.post('/fileuploads',processData.importData); //导入数据

    app.get('/user/list',user.getList); //获取用户列表

    app.get('/user/updateUser',user.updateUser); //更新用户

    app.post('/user/resetPassword',user.resetPassword);  //重置用户密码

    app.get('/classification/list',classification.getList);  //获取图文分类列表

    app.post('/classification/add',classification.add);  //添加图文分类

    app.post('/classification/revise',classification.revise); //修改图文分类名

    app.get('/activity/list',activity.getList); //获取活动列表

    app.get('/activity/delete',activity.deleteData); //根据ID删除活动

    app.post('/activity/add',activity.add); //添加活动

    app.post('/activity/edit',activity.edit); //修改活动

    app.post('/imgUpload',imgUpload.upload); //上传图片

    app.get('/lesson/list',lesson.list);  //获取课程列表

    app.post('/lesson/edit',lesson.edit);  //修改课程信息

    app.post('/bannerUpload',imgUpload.bannerUpload);  //上传首页图片

    app.post('/home/bannerAdd',home.bannerAdd);  //修改首页图片

    app.get('/home/getBanner',home.getBanner);   //获取首页图片

}