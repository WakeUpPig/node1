var EventEmitter = require('events').EventEmitter;
var util  = require('util');
function Me(name){
    this.name=name;
}

util.inherits(Me,EventEmitter);

var me = new Me();
me.addListener('newListener',function(event,func){
    console.log("event"+event);
})
me.addListener('boss',function(){
    console.log('can i help sir');
});
me.emit('boss');
me.on('微博上有新消息了', function(){
    console.log()
})
me.once('中午饿了', function(){
    console.log('吃午饭去')
});

me.emit('中午饿了');
me.emit('中午饿了');
var eatDinner =function () {
    console.log('吃完饭')
}
var eatCookie =function () {
    console.log('吃小甜点')
}
me.once('晚上饿了',eatDinner );
me.once('晚上饿了',eatCookie );
console.log(me.listeners('晚上饿了'));
//me.removeAllListeners('晚上饿了');
//me.emit('晚上饿了');

console.log(EventEmitter.listenerCount(me,'晚上饿了'));
