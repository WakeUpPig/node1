module.exports.parse=function(pathstr){
    var pathObj = pathstr.split('; ');
    var obj = {};
    for(var i = 0; i<pathObj.length;i++){
        var cur = pathObj[i].split('=')[0];
        obj[cur]=pathObj[i].split('=')[1];
    }
    return obj;

}