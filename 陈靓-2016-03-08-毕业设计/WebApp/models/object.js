(function() {
	var express,http;
	express = require('express');		//加载express模块等待扩展
	http = require('http');		//加载http模块等待扩展
	//通用摸版
	exports.kangjian = function (){};
	//blogs页面获取全部文章的数量
	exports.PostSorts_count_all_result = function  (count_all_result) {
		this.count_all_result = count_all_result;
	};
	//blogs页面获取全部文章并进行分页
	exports.PostGet_all = function  (title,blogs_id,dates,contents,write) {
		this.mood_title = title;
		this.mood_id = blogs_id;
		this.mood_date = dates;
		this.mood_content = contents;
		this.mood_write = write;

	};

}).call(this);
