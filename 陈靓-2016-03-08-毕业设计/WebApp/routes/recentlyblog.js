/**
 * Created by Administrator on 16-3-7.
 */
/**
 * Created by Administrator on 16-2-13.
 */
var express = require('express'),
    router = express.Router(),
    TITLE_REG = 'Martian生活记录';
var http = require("http");            //提供web服务
var url = require("url");            //解析GET请求
var query = require("querystring");    //解析POST请求
var  objects = require('../models/object');
module.exports = objects;
var Post = require('../models/post');
var pagination = require('pagination');


/* GET home page. */
//router.get('/', function(req, res) {
//    if (req.cookies.islogin) {
//        console.log('cookies:' + req.cookies.islogin);
//        req.session.username = req.cookies.islogin;
//    }
//
//    if (req.session.username) {
//        console.log('session:' + req.session.username);
//        res.locals.username = req.session.username;
//    } else {
//        res.redirect('/login');
//        return;
//    }
//
//    ///res.render('blog', { title: 'Martian生活记录' });
//    //Mood.getMood(function(err, results,rows) {
//    //    ///var pageid= (rows-1)*10;
//    //    //var count=0;
//    //    //var page=req.body.page;
//    //    //var rows=req.body.rows;
//    //
//    //    res.render('blog', {
//    //        title: TITLE_REG,
//    //        moodslist: results
//    //
//    //         });
//    //    ////console.log(pageid);
//    //
//    //});
//
//
//});

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
    Post.PostSorts_count_all_result( null,function (PostSorts_count_all_resultErr, PostSorts_count_all_result) {
        if (PostSorts_count_all_resultErr) {
            count_all_result = 1;
        };
        count_all_result = PostSorts_count_all_result[0].count_all_result;
        total_rows = count_all_result ;
        var per_pages = 1;
        if(req.query.per_page){
            per_pages = req.query.per_page;
        };
        if(req.body.per_page){
            per_pages = req.body.per_page;
        }
        var per_page = 4;
        var base_url = 'profile?';
        var changePer_page = ( per_pages - 1 ) * per_page;
        Post.PostGet_all(changePer_page,per_page,function (PostGet_allErr, PostGet_all) {
            if (PostGet_allErr) {
                PostGet_all = [];
            };
            var Create_links = pagination.create_links(total_rows,per_page,per_pages,base_url);
            res.render('profile', { title: TITLE_REG,PostGet_all: PostGet_all,Create_links:Create_links});
        });
    });
});

module.exports = router;