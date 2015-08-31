var express = require('express');
var app = express();
var path = require('path');
//泡一杯咖啡

app.use('/coffee/:person',function(req,res,next){
    //计算响应头 设置content－type
    res.coffee += "add water";
    next();
});
app.use('/coffee/:person',function(req,res,next){
    //计算响应头 设置content－type
    res.coffee += "add coffee";
    if(req.params['person']=='black'){
        res.end(res.coffee);
    }else{
        next();
    }
});
app.use('/coffee/:person',function(req,res,next){
    //计算响应头 设置content－type
    res.coffee += "add suger";
    next();
});
app.get('/coffee/:person',function(req,res){
    //计算响应头 设置content－type
    res.coffee += "add milk";
    res.end(res.coffee);
});

app.listen(3000);