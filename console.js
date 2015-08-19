//console.log('hello zfpx');
//console.log('I am %s', 'zs');
//console.log('%s',{name:'zs'});
//console.log('%d',88.8);
//console.log('%d','aaa');
//console.log(1+1);
//console.log(1==1);
//var a = 1,b=2;
//console.log(a=b);



//console.time('xxx');
console.log(1+1);
console.log('error');
console.warn('warn');
//console.assert(1==2,'ddd');
console.assert(require('./test').add(1,2)==3,'add');
//console.timeEnd('xxx');

console.log(require.main == module);

var p = require.resolve('./test');
console.log(__dirname);

console.log(require.cache[p]);
var test1 = require('./test');
//console.log(require.cache);
var test2 = require('./test');
//console.log(require.cache);