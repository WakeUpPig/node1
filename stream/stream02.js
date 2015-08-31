var fs = require('fs');
var out = fs.createReadStream('./msg2.txt',function(){

});
//非流动模式
var bow = [];
out.on('readable',function(){
    console.log(100)
    var spoon;

    //while(null!=(spoon=out.read(10))){
    //    bow.push(spoon);
    //}
    out.read(10)
    //var spoon =out.read(3);
   // console.log(spoon.toString())
    //bow.push(spoon);
}).on('end',function(){
    var b  = Buffer.concat(bow);
    console.log(b.toString());
});

