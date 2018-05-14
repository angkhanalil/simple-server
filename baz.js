var Baz = function () {}; 

Baz.prototype.log = function () 
{ 	console.log('baz!'); 
}; 

Baz.prototype.log2 = function (msg) 
{ 	console.log('baz2 ! = ' +msg ); 
}; 

exports.Baz = new Baz();
