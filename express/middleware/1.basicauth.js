var express =require('express');
var basicAuth = require('basic-auth');
var util = require('util');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//app.use(function(req,res,next){
//    function auth(res){
//        res.set('WWW-Authenticate','Basic realm=Authorization Required');
//        return res.send(401);
//    }
//    var user = basicAuth(req);
//
//    if(user&&(user.name == 'zf' && user.pass == 'px')){
//        next();
//    }else{
//        auth(res)
//    }
//})
app.get('/',function(req, res ){
    console.log(req.headers.cookie);
    console.log(req.cookies);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.write('<head><meta charset="utf-8"></head>');
    res.end('welcome');
})
app.listen(9000);