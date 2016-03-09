var express = require('express'),
    router = express.Router(),
    Mood = require('../models/moodData.add.js'),
    personal = require('../models/personalData.add.js'),
    TITLE_REG = 'Martian发布心情';

router.get('/', function(req, res, next) {
    //if(!req.session.username){                     //到达/home路径首先判断是否已经登录
    //    req.session.error = "请先登录"
    //    res.redirect("/login");                //未登录则重定向到 /login 路径
    //}
    //if (req.cookies.islogin) {
    //
    //    req.session.username = req.cookies.islogin;
    //    console.log('cookies:' + req.cookies.islogin);
    //}

    if (req.session.username) {
        console.log('session:' + req.session.username);
        res.locals.username = req.session.username;
    } else {
        res.redirect('/login');
        return;
    }
   /// res.render('publish_blogs',{title:TITLE_REG});
    var data_email = req.session.username;
    var arrdata = [];
    var data3;
    personal.getDataByData(data_email, function(err, results) {

        if (results) {
            for (var i = 0; i < results.length; i++) {

                arrdata[i] = results[i].data_id;
                ////results[i].data_brithday= moment(result[i].data_brithday).format("YYYY/MM/DD");
                data3 =results[i].data_id;



            }
            personal.searchData(data3, function(err, results) {

                res.render('publish_blogs', {
                    title: TITLE_REG,
                    Datalist: results
                });

                ///console.log(results);


            });

        }

    });
});
router.post('/', function(req, res) {


    var date = new Date();
    var savedate = date.toLocaleString();

    var moodTitle = req.body.mood_title,
        moodContent = req.body.mood_content,
        moodImg = req.body.mood_img,
        moodWrite = req.body.mood_write,
        moodTime = savedate;

    var newMoods = new Mood({
        mood_title: moodTitle,
        mood_img: moodImg,
        mood_content: moodContent,
        mood_date: moodTime,
        mood_write: moodWrite
    });

    //添加数据


    newMoods.saveMood(function(err, result) {
        if (err) {
            req.session.error = err;

            res.send(500);
            return;
        }
        if (result.insertId > 0) {

            req.session.error = '添加成功';

            ///res.redirect('/main');
            res.send(200);
            //return;
            //res.redirect('/publish_blogs');
            return;
        } else {
            /////req.session.error = '添加失败';
            res.send(500);
            return;
        }

        res.render('publish_blogs', {
            title: TITLE_REG
        });
    });

});
module.exports = router;