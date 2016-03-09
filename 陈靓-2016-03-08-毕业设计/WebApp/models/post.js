var express = require('express')
,mysql = require('mysql')
,http = require('http');
var  queryDb = require('../db');		//加载db.js模块
mysql = queryDb.getMysqlConn();//加载db.js的getMysqlConn方法关联mysql数据库，并命名为mysql
var  objects = require('./object');
module.exports = objects;
var app = express();
objects.PostSorts_count_all_result =  function  PostSorts_count_all_result(err, callback) {
	var sql ="select count(0) as count_all_result from base_mood ;";
	mysql.query(sql,function(err,rows,fields){
 		if(err){
			throw err;
		}else{
			callback(err,rows,fields);
        		}
    	});//mysql.end();
};
objects.PostGet_all =  function  PostGet_all(changePer_page,per_page,callback) {
	if(changePer_page==''){
		changePer_page=0;
	};
	var sql ="select * from base_mood  order by mood_id desc limit "+changePer_page+" ,"+per_page;
	mysql.query(sql,function(err,rows,fields){
 		if(err){
			throw err;
		}else{
			callback(err,rows,fields);
        		}
    	});//mysql.end();
};

