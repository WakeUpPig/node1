var fs = require('fs');
var target = fs.createWriteStream('./new.md');
var out = fs.createReadStream('./1.git.md');
//for(var i = 0; i<10000;i++){
//    var flag = out.write(i.toString());
//    console.log(flag);
//}
out.on('data',function(data){
    console.log(data)
    var flag = target.write(data);
    console.log(flag)
})
out.on('drain',function(){
    console.log('操作系统缓存去的数据已被全部输出');
});



