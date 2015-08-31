//net
//var server = net.createServer([option],listener)

var net = require('net');
var util = require('util');
var fs = require('fs');
var fs = require('fs');
var out = fs.createWriteStream('1.txt');
var server  = net.createServer(function(socket){
    console.log(socket.address());
    server.getConnections(function(err,counts){
        console.log('现在有'+counts);

    });
    socket.setEncoding('utf8');
    socket.on('data', function (chunk) {
        console.log(chunk);
        console.log('已收到%字节',socket.bytesRead);
        out.write(chunk);
    })
    socket.on('end',function(){
        console.log('客户端链接关闭')
    });
    socket.on('close',function(){
        console.log('客户端输出')
    })
}).listen(8081,'localhost',function(){
    console.log('start' +util.inspect(server.address()))
});

//setTimeout(function(){
//    server.close();
//},10000);

server.on('close',function(){
    console.log('server closed');
});
server.on('error',function(err){
    if(err.code){
        console.log(err.code);
    }
});