const async = require("async");

async.parallel([
    function(callback) {
        console.log("Step 1");
        setTimeout(function() {
            console.log('one');
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        console.log("Step 2");
        setTimeout(function() {
            console.log('two');
            callback(null, 'two');
        }, 100);
    },
    function(callback) {    
        console.log("Step 3");
        setTimeout(function() {
            console.log('three');
            callback("ERROR3", 'three');
        }, 150);
    }
],
// optional callback
function(err, results) {
    console.log(err);
    console.dir(results);
});
