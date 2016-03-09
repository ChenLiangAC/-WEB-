//登录界面
var express = require('express'),
    router = express.Router(),
    infor = require('../models/active.js'),
    crypto = require('crypto'),
    TITLE_LOGIN = 'Martian效率管理系统登录';

router.get('/', function (req, res) {

    res.render('login', {
        title: TITLE_LOGIN
    });
});

router.post('/', function (req, res) {

    var user_Name = req.body.username,
        user_Pwd = req.body.userpwd,
        is_Rem = req.body['chbRem'],
    //////加密用户密码
        md5 = crypto.createHash('md5'),
        userPwd_m = md5.update(user_Pwd).digest('hex');

    infor.getUserByUserName(user_Name, function (err, results) {

        if (results == '') {

            req.session.error = '用户名不存在';
            res.sendStatus(404);
            return;
        }


        if (results[0].username != user_Name || results[0].userpwd != userPwd_m) {
            req.session.error = '用户名或密码有误';

            res.sendStatus(404);
            console.log(userPwd_m, results[0].userpwd);

            return;
        } else {

            req.session.username = user_Name;
            res.redirect("/main");
        }
    });
});

module.exports = router;
