/*
var buf1 = new Buffer(12);
buf1.fill(1,1,3);
console.log(buf1);

var buf2 = new Buffer([1,2,3]);
console.log(buf2);

var buf3 = new Buffer("珠峰",'utf8');
console.log(buf3);

var buf4 = new Buffer(1);
buf4[0] = -12;
console.log(buf4[0]);

var sum = 0;
for(var i = 0; i<8; i++){
    sum+=Math.pow(2,i);
}
console.log(sum);

var str = '珠峰';
str[0]='我';
var buf= new Buffer(str);
buf[0]=0;
console.log(str);
console.log(buf);

console.log(str.slice(1,3));
console.log(buf.slice(3,6));
var s = buf.slice(3,6);
s.fill(0,0,3);
console.log(buf);
var buf= new Buffer("珠峰培训");
buf.write('学院',6,6);
console.log(buf.toString())
var buf1= new Buffer("珠峰培训");
console.log(buf1);

var buf2 = new Buffer([0xe7,0x8f,0xa0,0xe5,0xb3,0xb0]);
var buf3 = new Buffer([0xe5,0x9f,0xb9,0xe8,0xae,0xad]);
var buf = Buffer.concat([buf2,buf3],12);
console.log(buf.toString());

*/

var buf2 = new Buffer([0xe7,0x8f,0xa0,0xe5,0xb3,0xb0]);
var buf3 = new Buffer([0xe5,0x9f,0xb9,0xe8,0xae,0xad]);
function concat(arr,length){
    var buf;
    if(length){
        buf = new Buffer(length);
    }
    var index = 0;
    for(var i = 0; i<arr.length;i++){
        arr[i].copy(buf,index,0,arr[i].length);
        index+=arr[i].length;
    }
    return buf;

}

var buf1= concat([buf2,buf3],12);
console.log(buf1.toString());

console.log(Buffer.isBuffer(""));
console.log(Buffer.byteLength('123456'));
console.log(Buffer.isEncoding('utf8'));