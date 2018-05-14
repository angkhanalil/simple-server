// var http = require('http'); 
// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('yes you can\n');
// }).listen(8000);
// console.log("server running port 8000"); 

var express = require('express');
var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.use(express.static('web'));
console.log("server running port 8000");


// require('./foo.js'); 
// foo();
// foo2("v1");

// var bar = require('./bar.js'); 
// bar();
// bar("SDF");

// var fiz = require('./fiz.js').fiz; 
// fiz();

// var fiz2 = require('./fiz.js').fiz2; 
// fiz2("nan");

// var fizz = require('./fiz.js');
// fizz.fiz();
// fizz.fiz2("xxxxxx");

// var buz = require('./buz.js'); 
// buz.log();
// buz.log2("yyyyy");


// var baz = require('./baz.js').Baz; 
// baz.log();
// baz.log2("zzzzzzzzzzzzzzz");

// var Doo = require('./doo.js'); 
// var doo = new Doo(); 
// doo.log();


// var Qux = require('./qux.js').Qux; 
// var qux = new Qux(); 
// qux.log();
// qux.log2();

