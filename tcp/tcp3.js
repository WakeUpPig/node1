var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./mt.txt');
var server  = net.createServer({allowHalfOpen:true},function(socket){
    socket.setEncoding('utf8');
    var rs = fs.createReadStream('./msg.txt');
    rs.on('data',function(data){
        var flag  = socket.write(data);
        //console.log(flag);
        //console.log('缓存队列有%d字符',socket.bufferSize);
    });
    var s = ';';
    socket.on('data',function(data){
       s= data+"too";
        console.log(s)
    });
    socket.on('error',function(err){
        console.log(err)
        socket.destroy();
    })
    setInterval(function() {
        console.log(s);
    },2000)
}).listen(8080);




