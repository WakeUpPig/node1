var module = {

}
module.exports = [1,2,3];

var exports = module.exports;
console.log(exports);
module.exports.push(4);
console.log(exports);
exports=[];
console.log(exports);