var Qux = function () {}; 
Qux.prototype.log = function () 
{ 	console.log('baz!'); 
}; 

Qux.prototype.log2 = function ()
 { 	console.log('Qux!'); 
}; 

exports.Qux = Qux;
