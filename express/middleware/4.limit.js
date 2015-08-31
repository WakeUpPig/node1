var express =require('express');
var path = require('path')
var app = express();
var rowBoy = require('raw-body');
var path = require('path');
var methodOverride = require('method-override');
app.use(function(req,res,next){
    rowBoy(req,{
        length:req.headers['content-length'],
        limit:'1mb'
    },function(err,msg){
        if(err){
            next(err);
        }
        else{
            next();
        }
    })
})
app.use(function(err,req,res,next){
    console.log(err)
    res.send(err)
});
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.post('/upload',function(req,res){
    res.end('over');
});

app.listen(9000);