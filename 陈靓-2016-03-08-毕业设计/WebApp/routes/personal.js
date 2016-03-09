//个人资料
var express = require('express'),
    router = express.Router(),
    personal = require('../models/personalData.add.js'),
    TITLE_REG = 'Martian个人资料填写';


router.get('/', function (req, res) {
    if (req.cookies.islogin) {
        console.log('cookies:' + req.cookies.islogin);
        req.session.username = req.cookies.islogin;
    }

    if (req.session.username) {
        console.log('session:' + req.session.username);
        res.locals.username = req.session.username;
    } else {
        res.redirect('/login');
        return;
    }
    res.render('personal', {
        title: TITLE_REG
    });
});
router.post('/', function (req, res) {

    var dataname = req.body.data_name,
        dataage = req.body.data_age,
        datawork = req.body.data_work,
        datacompany = req.body.data_company,
        dataemail = req.body.data_email,
        dataphone = req.body.data_phone,
        databrithday = req.body.data_brithday,
        dataself = req.body.data_self,
        dataimage = '';


    var newDatas = new personal({
        data_name: dataname,
        data_age: dataage,
        data_work: datawork,
        data_company: datacompany,
        data_email: dataemail,
        data_phone: dataphone,
        data_brithday: databrithday,
        data_self: dataself,
        data_image: dataimage
    });

    //添加数据
    newDatas.saveData(function (err, result) {
        if (err) {
            req.session.error = err;

            res.sendStatus(500);
            return;
        }
        if (result.insertId > 0) {


            res.sendStatus(200);
            return;
        } else {

            res.sendStatus(500);
        }

        res.render('personal', {
            title: TITLE_REG
        });
    });

});
module.exports = router;