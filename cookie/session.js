/*
session 会话
 */

var http = require('http'),
    url = require('url'),
    cookieUtils = require('./cookieUtil');
var uuid = require('uuid');
var session={};//1 150 2 135
var SESSION_ID='zfkey';
var EXP_TIME=2*1000;
http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if('./favicon.ico'==urlObj.pathname){
        req.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }else{
        var now = new Date().getTime();
        var cookieObj = cookieUtils.parse(req.headers.cookie);
        if(cookieObj[SESSION_ID]){
            //res.end(JSON.stringify(cookieObj));
            var sessionid = cookieObj[SESSION_ID];
            var sessionObj = session[sessionid];
            console.log(sessionObj)
            if(!sessionObj || !(sessionObj.expTime)||sessionObj.expTime.getTime()<now){
                var newsessionObj = {money:150};
                newsessionObj.expTime=new Date(now+EXP_TIME);
                var newsessionid = uuid.v4()+"_"+now+"_"+Math.random();
                session[newsessionid] = newsessionObj;
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf-8",
                    "set-cookie":SESSION_ID+"="+newsessionid
                });
                delete session[sessionid];
                res.end('欢迎光临，您新卡号是'+newsessionid+",会员卡余额"+newsessionObj.money);
            }else{
                sessionObj.expTime = new Date(now+EXP_TIME);
                sessionObj.money=sessionObj.money-15;
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf-8",
                });

                res.end('欢迎回来'+sessionObj.expTime.toLocaleString()+"余额为"+sessionObj.money)
            }
        }else{
            //如果客户端没有sessionId

            var sessionObj = {money:150};
            sessionObj.expTime=new Date(now+EXP_TIME);
            var sessionid = uuid.v4()+"_"+now+"_"+Math.random();
            session[sessionid] = sessionObj;
            res.writeHead(200,{
                "Content-Type":"text/html;charset=utf-8",
                "set-cookie":SESSION_ID+"="+sessionid
            });
            res.end('欢迎光临，您的卡号是'+sessionid+",会员卡余额"+sessionObj.money);
        }
    }
}).listen(8080);
