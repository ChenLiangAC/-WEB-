var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ueditor = require("ueditor");
var session = require('express-session');
var routes = require('./routes/index');
var login = require('./routes/login');
var main = require('./routes/main');
var logout = require('./routes/logout');
var register = require('./routes/register');
var users = require('./routes/users');
var blog = require('./routes/blog');
var blogdelete = require('./routes/blogdelete');
var publish_blogs = require('./routes/publish_blogs');
var personal = require('./routes/personal');
var profile = require('./routes/profile');
var todolist = require('./routes/todolist');
var todolistdelete = require('./routes/todolistdelete');
var todolistupdata = require('./routes/todolistupdata');

var recently = require('./routes/recentlyblog');
var settings = require('./db');//加载
var partials = require('express-partials');

var app = express();
var ejs = require('ejs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine("html", ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//////////////////////////////////
app.use(cookieParser("An"));

///////////加密cookie
app.use(session({
  secret: 'an',
  resave: false,
  saveUninitialized: true,
  key: 'islogin', //cookie name
  cookie: {
    maxAge: 1000 * 60 * 10
  }

}));
app.use(function(req, res, next) {
  res.locals.username = req.session.username; // 从session 获取 user对象
  var err = req.session.error; //获取错误信息
  delete req.session.error;
  res.locals.message = ""; // 展示的信息 message
  if (err) {
    res.locals.message = '<div id="alt_warning" class="alert alert-warning">' + err + '</div>';
  }
  next(); //中间件传递
});

///////////////////////////上传图片
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
  // ueditor 客户发起上传图片请求
  if (req.query.action === 'uploadimage') {
    var foo = req.ueditor;
    ///var date = new Date();
    var imgname = req.ueditor.filename;

    var img_url = '/images/ueditor/';
    res.locals.username = req.session.username; // 从session 获取 user对象
    ///console.log(req.session.username);
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    console.log(imgname);
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images/ueditor/';
    res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    ////console.log(req.session.username);
    ///console.log('config.json')
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/nodejs/config.json');
  }
}));


app.use('/', routes);
app.use('/main', main);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);
app.use('/blog', blog);
app.use('/blogdelete', blogdelete);
app.use('/publish_blogs', publish_blogs);

app.use('/personal', personal);
app.use('/recentlyblog', recently)

app.use('/profile', profile);
app.use('/todolist', todolist);
app.use('/todolistdelete', todolistdelete);
app.use('/todolistupdata', todolistupdata);

app.use('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
