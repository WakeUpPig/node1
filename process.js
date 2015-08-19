console.log('1号桌点餐');
console.log('2号桌点餐');
setImmediate(function () {
    console.log('记账1');
    process.nextTick(function(){
        console.log('给点吃的吧2')
    });
});
process.nextTick(function(){
   console.log('给点吃的吧1');
    setImmediate(function () {
        console.log('记账3');
    });
});
setImmediate(function () {
    console.log('记账2');
});
console.log('333');
console.log('111');