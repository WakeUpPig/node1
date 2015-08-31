//path
//flag encoding start


//write(chuck,encoding，callback)
var fs = require('fs');
var src = fs.createReadStream('./msg.txt');
var target = fs.createWriteStream('./other.txt');

target.on('open',function(){
    console.log('已打开');
});
src.on('data',function(data){
    target.write(data);
});
src.on('end',function(){
    target.end('再见');
    target.on('close',function(){
        console.log('全部写入');
        console.log('共写入%d字节',target.bytesWritten);
    });
});




