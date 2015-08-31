/*
 * express
 * 1.安装express
 * 2.
 * */
var express = require('express');
var app = express();
var util = require('util');
var path = require('path');
var session = require('express-session');
//var session = require('cookie-session');
//var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
app.set('view engine','html');
app.set('views',__dirname);
app.engine('.html',require('ejs').__express);
app.use(session({
    secret:'zfpx',
}));

app.use(multer());//{dest:'./'}
app.use(function(req,res,next){
    if(req.url == "/login"||req.session.username){
        next();
    }else {
        res.redirect('/login');
    }
});
app.get('/login',function(req,res){
    res.render('index');
});
app.post('/login',function(req,res){
    req.session.username=req.body.username;
    res.redirect('/home');
})
app.get('/home',function(req,res){
    res.render('home',{
        username:req.session.username
    });
})
app.get('/logout',function(req,res){

    req.session.username=null;
    res.redirect('/login');
})

//app.use(express.static(__dirname));
//app.use(function(req,res,next){
//    console.log(req.host,req.method,req.url,req.query);
//    res.writeHead(200,{
//        "content-Type":"text/html;charset=utf-8"
//    });
//    res.writeHeader();
//    res.setHeader()
//    next()
//});
//app.get('/',function(req,res){
//    req.session.myname='zfpx'
//    //计算响应头 设置content－type
//    //res.end('珠峰');
//    res.render('index',{name:'zf'});
//});

app.post('/upload',function(req,res){
    console.log(util.inspect(req.body));
    console.log(util.inspect(req.files));
    //计算响应头 设置content－type
    //res.end('培训');
    //res.send(fs.createReadStream(req.files.avatar.path));
    fs.createReadStream(req.files.avatar.path).pipe(res);
});
app.get('/b',function(req,res){
    //计算响应头 设置content－type
    res.send({name:'req.session.mynamejiang'});
});
app.get('/read',function(req,res){
    //计算响应头 设置content－type
    res.send(req.session.myname);
    res.send(req.session)
});
app.get('/c',function(req,res){
    //计算响应end头 设置content－type
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(3000);




//app.use(bodyParser.urlencoded());



