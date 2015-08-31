var express =require('express');
var path = require('path')
var app = express();
var path = require('path');
var methodOverride = require('method-override');
//三种用法 1 header
//2. QUERY取值的方法
app.use(methodOverride(function(req,res,next){
    var method = req.body._method;
    req.method=method;
}))
//app.use(function(req,res,next){
//    res.setHeader('X-HTTP-Method-override','PUT');
//    next();
//
//})
app.use(methodOverride('_method'));
//app.use(methodOverride('X-HTTP-Method-override'));
app.get('/',function(req,res){
    console.log(req.method)
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.all('/upload',function(req,res){
    console.log(req.method)
    res.end('over');
});

app.listen(8888);