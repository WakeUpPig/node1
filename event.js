function Event(){
    //prototype －》》》Object.prototype
}
Event.prototype.addListener=function(type,listener){
    if(! typeof  listener == 'function'){
        throw TypeError('监听器必须事一个函数');
    }
    if(!this._events){
        this._events = {};
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type] = [listener];
    }
};
Event.prototype.emit = function(type){
    if(!this._events){
        this._events = {};
    }

    var handler = this._events[type];
    var arr = new Array(arguments.length-1);
    for(var i = 1 ; i <arguments.length;i++){
        arr[i-1]=arguments[i];
    }
    for(var j = 0; j < handler.length;j++){
        handler[j].apply(this,arr);
    }
};
function Girl(){
    var name = 'girl';
    var gotoHos = function(){

    }
}
Girl.prototype = new Event();
var min = new Girl();

function Boy (){
}
var jiang = new Boy();
jiang.say = function(thing){
        console.log('喜欢嘛？我买'+thing+'给你');
};
min.addListener('看了好久',jiang.say);
var zry = new Boy();
zry.say= function(){
    console.log('喜欢嘛？多看议会吧');
};
min.addListener('看了好久',zry.say);
min.emit('看了好久','IphonePlus');
