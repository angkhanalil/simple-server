// var http = require('http'); 
// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('yes you can\n');
// }).listen(8000);
// console.log("server running port 8000"); 

var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var server = require('http').Server(app);
server.listen(3000);
const cors  = require('cors');
const birds = require('./birds');
const user = require('./controller/user');
const login = require('./controller/login');
const issue = require('./controller/issue');

app.use(express.static('web'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(cors());
app.use("/birds",birds);
app.use("/api/v1/user",user);
app.use("/api/v1/login",login);
app.use("/api/v1/issue",issue);

console.log("server running port 3000");

app.get('/he*', function (req, res,next) {
    console.log("Hello form all logs");
    // res.end("Hello world from all.......");
    next();
 });

 app.get('/hello', function (req, res) {
    console.log(req.query);
   res.end("Hello world......." +req.query.userName);
});

app.get('/hello/:userName', function (req, res) {
    console.log(req.params);
   res.end("Hello world......." + req.params.userName  );
});


app.post('/hello', function (req, res) {
  let obj = {
      code:"007",
      name :req.body.userName
  }
  res.json(obj);
    // res.end("Hello world from POST.......");
 });
 
 var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!');
  }
  
  app.get('/example/c', [cb0, cb1, cb2]);
   
//   app.route()

 app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });



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

