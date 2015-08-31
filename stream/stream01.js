 var fs = require('fs');
 var out = fs.createReadStream('./msg.txt',function(){

 })
 out.on('open', function () {
     console.log('file open');
 })
 out.pause();
 setTimeout(function () {
     out.resume();
 },2000);
 out.on('data', function (data) {
     console.log('读取完毕'+data);
 });
 out.on('end',function(){
     console.log('读取完毕');
 });