
// 100   20   20  20  20   10  100



var http = require('http');
var url = require('url');
var cookieUtil = require('./cookieUtil');
var server = http.createServer(function(req,res){
    var path = url.parse(req.url);
    console.log(path.pathname);
    if(path.pathname=='/favicon.ico'){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }else if(path.pathname=='/write'){
        console.log(2)
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8;',
            domain:'localhost',
            "set-cookie":["name="+encodeURIComponent('fdl')+";path=/read1","age=6;path=/read2","home=beijing;path=/read3"]
        });
        res.end('ok');
    }else{
        var cookie = req.headers.cookie;
        res.writeHead(200,{"content-type":"text-html;charset=utf-8"});
        res.end(JSON.stringify(cookieUtil.parse(cookie)));
    }

}).listen(8080,function(){
    console.log('server start');
});




