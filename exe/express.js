var express = require('express');
var multer = require('multer');
var app = express();
app.use(multer({dest:'./'}));
app.set('view engine','html');
app.set('views',__dirname);
app.engine('.html',require('ejs').__express);
app.get('/',function(req,res){
    res.render('index',{
        name:123
    });
});
app.listen(8888);