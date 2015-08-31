var fs = require('fs');
//对文件进行简单的加密
function encode(path){
    if(fs.existsSync(path)){
        var stat = fs.statSync(path);
        if(stat.isFile()){
            var content = fs.readFileSync(path);
            console.log(content);
            for(var i = 0; i<content.length;i++){
                content[i] = 255-content[i];
            }
            var out = fs.createWriteStream(path+"_");
            out.end(content);
        }
    }
}

encode('./1.txt_');//255 - x
