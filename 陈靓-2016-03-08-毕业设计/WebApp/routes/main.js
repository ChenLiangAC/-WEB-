//个人主页
var express = require('express');
var router = express.Router();
var personal = require('../models/personalData.add.js');
var todolist = require('../models/todolist.add.Data.js');
var infor = require('../models/active.js');
var   TITLE = 'Martian效率管理系统';

/* GET home page. */
router.get('/', function(req, res) {

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
    personal.getDataByData(data_email, function(err, results) {


        if (results) {
            for (var i = 0; i < results.length; i++) {

                arrdata[i] = results[i].data_id;

                data3 =results[i].data_id;



            }
            personal.searchData(data3, function(err, results) {

                //res.render('main', {
                //    title: TITLE,
                //    Datalist: results
                //});
                todolist.gettodoList(function(err, result) {

                    //res.render('main', {
                    //    title: TITLE,
                    //    Datalist: results,
                    //    ToDoDatalist: result
                    //});

                    infor.getUser(function(err, rowresult) {

                        res.render('main', {
                            title: TITLE,
                            Datalist: results,
                            ToDoDatalist: result,
                            Userlist: rowresult
                        });




                    });


                });



            });
        }

    });


});
//router.get('/todolist', function(req, res) {
//    todolist.gettodoList(function(err, results) {
//
//        res.render('main', {
//            title: TITLE,
//            ToDoDatalist: results
//        });
//
//
//
//
//    });
//
//});

module.exports = router;