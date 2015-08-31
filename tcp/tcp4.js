var net  = require('net');
var util = require('util');
var socket = new net.Socket({allowHalfOpen:true});
socket.setEncoding('utf-8');
socket.connect(8080,'localhost',function(){
   // console.log(util.inspect(socket));
    socket.write('hello server');
    setTimeout(function(){
        socket.end('bye bye server');
    },1000);
});

socket.on('error',function(err){
    console.log(err)
    socket.destroy()
})
socket.on('end',function(){
    console.log('客户端关闭链接');
})
socket.on('data',function(data){
    console.log('服务器说'+data);
})