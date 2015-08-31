/*
* 1.cookie是什么，干什么用
* 2.如何读写cookie
* 3.cookie有缺点
* */

/*
* 1.如何写cookie
* set－Cookie：name=zfpx;path=/p;domain=.zf.com
* expires=xxxxxx
* /p
*
* */


var url  = require('url');
var http = require('http');
var cookieUtil = require('./cookieUtil');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if('./favicon.ico'==urlObj.pathname){
        req.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }else if('/write'==urlObj.pathname){
        res.writeHead(200,{
            "Content-Type":"text-html;charset=utf-8",domain:'localhost',
            "set-cookie":cookieUtil.toArray({name:"珠峰",age:6}
                //{path:'/p3',
                // maxAge:'5',
                // domain:'localhost',
                // expires:new Date(new Date().getTime()+10*1000),
                //// httpOnly:true
                )
            //"set-cookie":["name="+encodeURIComponent('珠峰')+";path=/read1","age=6;path=/read2","home=beijing;path=read3"]
        })
        var str =cookieUtil.toArray({name:"珠峰",age:6},
            {path:'/p3',
                maxAge:'10',
                domain:'localhost',
                expires:new Date(new Date().getTime()+10*1000),
                //httpOnly:true
            })
        res.end(str.toString());
    }else{
        var cookie = req.headers.cookie;
        console.log(cookie)
        res.writeHead(200,{"content-type":"text-html;charset=utf-8"});
        res.end(JSON.stringify(cookieUtil.parse(cookie)));
    }
}).listen(8082);