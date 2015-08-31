var express = require('express');
var app = express();
var util = require('util');
var path = require('path');
app.set('view engine','html');
app.set('views',__dirname);
var serveStatic = require('serve-static');
console.log(path.join(__dirname,'/public'))
app.use(serveStatic(path.join(__dirname,'/public')));
app.engine('.html',require('ejs').__express);
//app.use(express.static(__dirname));
var fs = require('fs')
app.get('/',function(req,res){
    res.render('index',{name:'zf'});
});

app.listen(2009);




