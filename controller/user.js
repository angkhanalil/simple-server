var express = require('express');
var router = express.Router();
var mysqldb = require('../shared/mysql-db');


router.get('/test', function (req, res) {

    mysqldb.query("select * from tab",
        function (err, result) {
            // res.json(result);
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(result);
            }

        });

});

router.get('test2', testResolve);

function testResolve(req, res) {

}

module.exports = router;