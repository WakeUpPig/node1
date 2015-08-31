/*
* express
* 1.安装express
* 2.
* */
var express = require('express');
var app = express();
var path = require('path');
app.get('/',function(req,res){
    //计算响应头 设置content－type
    res.send('zfpx');
});
app.get('/a',function(req,res){
    //计算响应头 设置content－type
    res.send(404);
});
app.get('/b',function(req,res){
    //计算响应头 设置content－type
    res.send({name:'jiang'});
});
app.get('/c',function(req,res){
    //计算响应头 设置content－type
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(3000);