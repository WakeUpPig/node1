function parse(str){
    var cookieObj = {};
    if(str){
        var vals = str.split('; ');
        for(var i = 0; i<vals.length;i++){
            var kv = vals[i].split('=');
            cookieObj[kv[0]] = decodeURIComponent(kv[1]);
        }
    }
    return cookieObj;
}
/**
 * 把对象转化成发送到客户端的cookie字符串
 * @param cookieObj 对象
 * @param options 选项
 */
function toArray(cookieObj,options){
    var cookieArr = [];
    if(cookieObj){
        for(var name in cookieObj){ //迭代对象的每个属性
            var cookieStr = name+'='+encodeURIComponent(cookieObj[name])
            if(options){
                if(options.path){
                    cookieStr+=";path"+options.path;
                }
                if(options.maxAge){
                    var maxAge = parseInt(options.maxAge);
                    if(isNaN(maxAge)){
                        throw new Error('MUST BE A NUMBER');

                    }else{
                        cookieStr+=';max-age='+maxAge;
                    }
                }
                if(options.domain){
                    cookieStr+=';domai=n'+options.domain;
                }
                if(options.expires){
                    if(options.expires instanceof Date){
                        cookieStr+=';expires='+options.expires.toLocaleString();
                    }else{
                        throw new Error('must be a date');
                    }
                }
                if(options.httpOnly){
                    cookieStr+=";httpOnly";
                }
            }
            cookieArr.push(cookieStr);
        }
        console.log(cookieArr)
        return cookieArr
    }
}
module.exports.parse=parse;
module.exports.toArray=toArray;