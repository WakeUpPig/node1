var express =require('express');
var favicon = require('serve-favicon');
var path = require('path')
var app = express();
app.use(favicon(path.join(__dirname,'/favicon.ico')))
app.use('/',function(req,res){
    console.log('1')
    next(null);
    //next 方法不为null
    //throw  Error('error')
    next();
});
app.use('/',function(req,res){
 console.log('2')
    res.send();
});
app.use(function(err,req,res,next){
    console.log('3')
    res.send('不好意思没有你找的页面，看看别的')
});
app.listen(9000);