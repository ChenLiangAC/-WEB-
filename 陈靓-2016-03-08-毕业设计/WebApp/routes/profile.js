var express = require('express');
var router = express.Router();
///var    formidable = require('formidable');
var personal = require('../models/personalData.add.js');
var fs = require('fs');
var TITLE = 'Martian效率管理系统个人资料';
///var    AVATAR_UPLOAD_FOLDER = '/avatar/';


router.get('/', function (req, res) {

    if(req.cookies.islogin)
    {
        req.session.username = req.cookies.islogin;
        console.log('cookies:' + req.cookies.islogin);

    }

    if(req.session.username)
    {
        console.log('session:' + req.session.username);
        res.locals.username = req.session.username;
    }
    else
    {
        res.redirect('/login');
        return;
    }

    var data_email = req.session.username;
    var arrdata = [];
    var data3;
    personal.getDataByData(data_email, function (err, results) {
        if (results) {
            for (var i = 0; i < results.length; i++) {

                arrdata[i] = results[i].data_id;
                data3 = results[i].data_id;


            }
            personal.searchData(data3, function (err, results) {

                res.render('profile', {
                    title: TITLE,
                    Datalist: results
                });

                ///console.log(results);


            });
        }

    });
    ///console.log(data_id);

});

router.post('/', function (req, res) {
    var data_email = req.session.username;
    var arrdata = [];
    var data3;
    var headimg;
    personal.getDataByData(data_email, function (err, results) {


        if (results) {
            for (var i = 0; i < results.length; i++) {

                arrdata[i] = results[i].data_id;
                data3 = results[i].data_id;

            }


            var
                dataid = data3,
                dataname = req.body['data_name'],
                dataage = req.body['data_age'],
                datawork = req.body['data_work'],
                datacompany = req.body['data_company'],
                dataemail = req.body['data_email'],
                dataphone = req.body['data_phone'],
                databrithday = req.body['data_brithday'],


                dataself = req.body['data_self'];
            personal.updateData(dataname, dataage, datawork, datacompany, dataemail, dataphone, databrithday, dataself, +dataid, function (err, results) {
                if (err) {
                    res.sendStatus(500);

                }
                if (results.affectedRows > 0) {


                    res.sendStatus(200);

                    console.log('更新成功');
                }


            });
        }

    });

});

module.exports = router;