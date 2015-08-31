var util = require('util')
var fs = require('fs')
var net = require('net')

var server  = net.createServer(function(socket){
    socket.on('data')



}).listen(8090)