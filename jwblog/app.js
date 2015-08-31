var express = require('express');//倒入
var path = require('path');
var favicon = require('serve-favicon');//收藏图标中间件
var logger = require('morgan');
var cookieParser = require('cookie-parser');//解析cookie
var bodyParser = require('body-parser');//解析body的数据

var routes = require('./routes/index');//首页
var users = require('./routes/users');//用户
var article = require('./routes/article');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//模版存放文件夹
app.set('view engine', 'ejs');//模版ejs

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//queryString query qs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//解析 cookie

app.use(express.static(path.join(__dirname, 'public')));//静态文件中间件

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
//捕获404
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
