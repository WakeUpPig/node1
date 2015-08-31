var express =require('express');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var app = express();
app.use(serveIndex('./'));
app.use(serveStatic('./'));

app.listen(9000);