const series = require("async").series;

series([
    function(callback) {
        // do some stuff ...
        console.log("step1");
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        console.log("step2");
        callback(null, 'two');
    },
    function(callback) {
        // do some more stuff ...
        console.log("step3");
        callback(null, 'three');
    },
    function(callback) {
        // do some more stuff ...
        console.log("step4");
        callback(null, 'four');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
    if(!err){
         console.log(results);
    }else{
        console.log(err);
    }
   
});
