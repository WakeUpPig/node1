var fs = require('fs');
var buf = new Buffer(1024*128);
buf.fill(1);
fs.writeFile('./msg2.txt',buf);
