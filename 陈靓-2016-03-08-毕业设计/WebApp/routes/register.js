var express = require('express'),
    router = express.Router(),
    infor = require('../models/active.js'),
    crypto = require('crypto'),
    TITLE_REG = 'Martian效率管理系统注册';

router.get('/', function(req, res) {

    res.render('register', {
        title: TITLE_REG
    });
});

router.post('/', function(req, res) {
    var date = new Date();
    var savedate = date.toLocaleString();
    var userName = req.body.username,
        userPwd = req.body.userpwd,
        userRePwd = req.body['userpwd1'],
        userDate = savedate,
    ///加密用户密码
        md5 = crypto.createHash('md5'),
        userPwd = md5.update(userPwd).digest('hex');
    var newUser = new infor({
        username: userName,
        userpwd: userPwd,
        userdate: userDate
    });

    //检查用户名是否已经存在
    infor.getUserNumByName(newUser.username, function(err, results) {

        if (results != null && results[0]['num'] > 0) {

            err = '用户名已存在';
        }

        if (err) {
            req.session.error = err;

            res.sendStatus(500);
            return;
        }

        newUser.save(function(err, result) {
            if (err) {
                req.session.error = err;

                res.sendStatus(500);
                return;
            }

            if (result.insertId > 0) {

                req.session.error = '注册成功';


                req.session.username=userName;

                console.log(req.session.username);

                res.sendStatus(200);
                return;
            } else {
                req.session.error = '网络异常';
                res.sendStatus(500);
            }



        });
    });
});

module.exports = router;
