var express = require('express');
var router = express.Router();
var mysqldb = require('../shared/mysql-db');

router.get("/getDataDDL", function (req, res) {
    // let obj = req.body;
    let sql = `select
    item_code as "pkCode"
    , item_code as "itemCode"
    , item_desc as "itemDesc"
    , item_value as "itemValue"
from sc_entry_item
where param_code = 'ISSUE'
    and entry_code = 'PROJECT'
order by item_desc`;
    mysqldb.query(sql, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                success: true
            });
        }
    });
});

module.exports = router;