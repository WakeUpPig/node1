/*
 * express
 * 1.安装express
 * 2.
 * */
var express = require('express');
var app = express();
var util = require('util');
var path = require('path');
app.use(function(req,res,next){
    console.log(req.host,req.method,req.url,req.query);
    res.writeHead(200,{
        "content-Type":"text/html;charset=utf-8"
    });
    next()
});
app.get('/',function(req,res){
    //计算响应头 设置content－type
    res.end('珠峰');
});
app.get('/a',function(req,res){
    //计算响应头 设置content－type
    res.end('培训');
});
app.get('/b',function(req,res){
    //计算响应头 设置content－type
    res.send({name:'jiang'});
});
app.get('/c',function(req,res){
    //计算响应end头 设置content－type
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(3000);


