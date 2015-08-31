var fs = require('fs');
var src = fs.createReadStream('./msg.txt');
var target = fs.createWriteStream('./other.txt');

src.pipe(target);



//out.on('error',function(err){
//    console.log(err);
//});
//out.write('1233');
//out.end('456');
//out.write('fff');
